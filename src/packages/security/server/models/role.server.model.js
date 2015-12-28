'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var RoleSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: 'Role name already exists',
        required: 'Please fill in a role name'
    },
    description: {
        trim: true,
        type: String
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Role', RoleSchema);
