'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    mongoose = require('mongoose'),
    System = mongoose.model('System'),
    errorHandler = require(path.resolve('./src/packages/core/system/server/controllers/errors.server.controller'));


/**
 * Show the current system
 */
exports.read = function (req, res) {
    res.json(req.model);
};

exports.create = function (req, res) {
    var data = req.body;
    var system = new System(data);
    system.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(system);
        }
    })
};

exports.update = function (req, res) {
    var system = req.model;

    system.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        res.json(system);
    })
};

exports.delete = function (req, res) {
    var system = req.model;

    system.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        res.json(system);
    })
};

exports.list = function (req, res) {
    System.find().sort('-created').exec(function (err, systems) {
        if (err) {
            res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        res.json(systems);
    });
};

/**
 * User middleware
 */
exports.systemByID = function (req, res, next, id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'System is invalid'
        });
    }

    System.findById(id).exec(function (err, system) {
        if (err) {
            return next(err);
        } else if (!system) {
            return next(new Error('Failed to load system ' + id));
        }
        req.model = system;
        next();
    });
};