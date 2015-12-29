'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

/**
 * User Schema
 */
var SystemSchema = new Schema({
    parentId: {
        type: Schema.ObjectId
        //required: true
    },
    treeId: {
        type: Schema.ObjectId
    },
    name: {
        type: String,
        trim: true,
        required: 'Please fill a name'
    },
    description: {
        trim: true,
        type: String
    },
    uri: {
        trim: true,
        type: String
    },
    lft: {
        type: Number,
        min: 0
    },
    rgt: {
        type: Number,
        min: 0
    },
    level: {
        type: Number
    },
    icon: {
        trim: true,
        type: String
    },
    iconCls: {
        trim: true,
        type: String
    },
    isFunctionality: {
        type: Boolean
    },
    version: {
        trim: true,
        type: String,
        default: "1.0.0"
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

SystemSchema.index({parentId: 1});
SystemSchema.index({lft: 1, rgt: 1});
SystemSchema.index({rgt: 1});

var updateConditions = function (conditions, item) {
    if (options.groupingKey) {
        conditions[options.groupingKey] = item[options.groupingKey];
    }
    return conditions;
};

SystemSchema.pre('save', function (next) {
    var self = this;
    if (self.parentId) {
        self.parent(function (err, parentNode) {
            if (!err && parentNode && parentNode.lft && parentNode.rgt) {

                // find siblings and check if they have lft and rgt values set
                self.siblings(function (err, nodes) {
                    if (nodes.every(function (node) {
                            return node.lft && node.rgt;
                        })) {
                        var maxRgt = 0;
                        nodes.forEach(function (node) {
                            if (node.rgt > maxRgt) {
                                maxRgt = node.rgt;
                            }
                        });
                        if (nodes.length === 0) {
                            // if it is a leaf node, the maxRgt should be the lft value of the parent
                            maxRgt = parentNode.lft;
                        }
                        var conditions = updateConditions({lft: {$gt: maxRgt}}, self);
                        self.constructor.update(conditions, {$inc: {lft: 2}}, {multi: true}, function (err, updatedCount) {
                            conditions = updateConditions({rgt: {$gt: maxRgt}}, self);
                            self.constructor.update(conditions, {$inc: {rgt: 2}}, {multi: true}, function (err, updatedCount2) {
                                self.lft = maxRgt + 1;
                                self.rgt = maxRgt + 2;
                                next();
                            });
                        });
                    } else {
                        // the siblings do not have lft and rgt set. This means tree was not build.
                        // warn on console and move on.
                        // console.log('WARNING: tree is not built for ' + modelName + ' nodes. Siblings does not have lft/rgt');
                        next();
                    }
                });
            } else {
                // parent node does not have lft and rgt set. This means tree was not built.
                // warn on console and move on.
                // console.log('WARNING: tree is not built for ' + modelName + ' nodes. Parent does not have lft/rgt');
                next();
            }
        });
    } else {
        // no parentId is set, so ignore
        next();
    }
});


SystemSchema.pre('remove', function (next) {
    var self = this;
    if (self.parentId) {
        self.parent(function (err, parentNode) {
            if (!err && parentNode && parentNode.lft && parentNode.rgt) {
                // find siblings and check if they have lft and rgt values set
                self.siblings(function (err, nodes) {
                    if (nodes.every(function (node) {
                            return node.lft && node.rgt;
                        })) {
                        var maxRgt = 0;
                        nodes.forEach(function (node) {
                            if (node.rgt > maxRgt) {
                                maxRgt = node.rgt;
                            }
                        });
                        if (nodes.length === 0) {
                            // if it is a leaf node, the maxRgt should be the lft value of the parent
                            maxRgt = parentNode.lft;
                        }
                        var conditions = updateConditions({lft: {$gt: maxRgt}}, self);
                        self.constructor.update(conditions, {$inc: {lft: -2}}, {multi: true}, function (err, updatedCount) {
                            conditions = updateConditions({rgt: {$gt: maxRgt}}, self);
                            self.constructor.update(conditions, {$inc: {rgt: -2}}, {multi: true}, function (err, updatedCount2) {
                                next();
                            });
                        });
                    } else {
                        // the siblings do not have lft and rgt set. This means tree was not build.
                        // warn on console and move on.
                        // console.log('WARNING: tree is not built for ' + modelName + ' nodes. Siblings does not have lft/rgt');
                        next();
                    }
                });
            } else {
                // parent node does not have lft and rgt set. This means tree was not built.
                // warn on console and move on.
                // console.log('WARNING: tree is not built for ' + modelName + ' nodes. Parent does not have lft/rgt');
                next();
            }
        });
    } else {
        // no parentId is set, so ignore
        next();
    }
});


// Builds the tree by populating lft and rgt using the parentIds
SystemSchema.static('rebuildTree', function (parent, left, callback) {
    var self = this;
    parent.lft = left;
    parent.rgt = left + 1;

    self.find({parentId: parent._id}, function (err, children) {
        if (err) return callback(err);
        if (!children) return callback(new Error(self.constructor.modelName + ' not found'));

        if (children.length > 0) {
            async.forEachSeries(children, function (item, cb) {
                self.rebuildTree(item, parent.rgt, function () {
                    parent.rgt = item.rgt + 1;
                    self.update({_id: parent._id}, {lft: parent.lft, rgt: parent.rgt}, cb);
                });
            }, function (err) {
                callback();
            });
        } else {
            self.update({_id: parent._id}, {lft: parent.lft, rgt: parent.rgt}, callback);
        }
    });
});

// Returns true if the node is a leaf node (i.e. has no children)
SystemSchema.method('isLeaf', function () {
    return this.lft && this.rgt && (this.rgt - this.lft === 1);
});

// Returns true if the node is a child node (i.e. has a parent)
SystemSchema.method('isChild', function () {
    return !!this.parentId;
});


// Returns true if other is a descendant of self
SystemSchema.method('isDescendantOf', function (other) {
    var self = this;
    return other.lft < self.lft && self.lft < other.rgt;
});

// Returns true if other is an ancestor of self
SystemSchema.method('isAncestorOf', function (other) {
    var self = this;
    return self.lft < other.lft && other.lft < self.rgt;
});

// returns the parent node
SystemSchema.method('parent', function (callback) {
    var self = this;
    self.constructor.findOne({_id: self.parentId}, callback);
});

// Returns the list of ancestors + current node
SystemSchema.method('selfAndAncestors', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['lft'] = {$lte: self.lft};
        filters['$query']['rgt'] = {$gte: self.rgt};
    } else {
        filters['lft'] = {$lte: self.lft};
        filters['rgt'] = {$gte: self.rgt};
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of ancestors
SystemSchema.method('ancestors', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['lft'] = {$lt: self.lft};
        filters['$query']['rgt'] = {$gt: self.rgt};
    } else {
        filters['lft'] = {$lt: self.lft};
        filters['rgt'] = {$gt: self.rgt};
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of children
SystemSchema.method('children', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['parentId'] = self._id;
    } else {
        filters['parentId'] = self._id;
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of children + current node
SystemSchema.method('selfAndChildren', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['$or'] = [{parentId: self._id}, {_id: self._id}];
    } else {
        filters['$or'] = [{parentId: self._id}, {_id: self._id}];
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of descendants + current node
SystemSchema.method('selfAndDescendants', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['lft'] = {$gte: self.lft};
        filters['$query']['rgt'] = {$lte: self.rgt};
    } else {
        filters['lft'] = {$gte: self.lft};
        filters['rgt'] = {$lte: self.rgt};
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of descendants
SystemSchema.method('descendants', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['lft'] = {$gt: self.lft};
        filters['$query']['rgt'] = {$lt: self.rgt};
    } else {
        filters['lft'] = {$gt: self.lft};
        filters['rgt'] = {$lt: self.rgt};
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of all nodes with the same parent + current node
SystemSchema.method('selfAndSiblings', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['parentId'] = self.parentId;
    } else {
        filters['parentId'] = self.parentId;
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the list of all nodes with the same parent
SystemSchema.method('siblings', function (filters, fields, options, callback) {
    var self = this;
    if ('function' === typeof filters) {
        callback = filters;
        filters = {};
    }
    else if ('function' === typeof fields) {
        callback = fields;
        fields = null;
    }
    else if ('function' === typeof options) {
        callback = options;
        options = {};
    }

    filters = filters || {};
    fields = fields || null;
    options = options || {};

    if (filters['$query']) {
        filters['$query']['parentId'] = self.parentId;
        filters['$query']['_id'] = {$ne: self._id};
    } else {
        filters['parentId'] = self.parentId;
        filters['_id'] = {$ne: self._id};
    }
    self.constructor.find(filters, fields, options, callback);
});

// Returns the level of this object in the tree. Root level is 0
//SystemSchema.method('level', function (callback) {
//    var self = this;
//    self.ancestors(function (err, nodes) {
//        callback(err, nodes.length);
//    });
//});

mongoose.model('System', SystemSchema);
