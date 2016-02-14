'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    config = require(path.resolve('./config/config')),
    errorHandler = require(path.resolve('./src/packages/core/system/server/controllers/errors.server.controller')),
    ClientRest = require('node-rest-client').Client,
    generatePassword = require('password-generator');

/**
 * Show the current user
 */
exports.read = function (req, res) {
    res.json(req.model);
};

/**
 * Create a user
 */
exports.create = function (req, res) {
    console.log("config", config);
    var jidPassword = generatePassword(12, false);
    var user = new User(req.body);
    user.jid = user.username + '@' + config.xmpp.domain;
    user.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            //Persist user in openfire server
            var client = new ClientRest();
            // set content-type header and data as json in args parameter
            var args = {
                data: {
                    "username": user.username,
                    "password": jidPassword,
                    "name": user.displayName,
                    "email": user.email
                },
                headers: {"Content-Type": "application/json", "Authorization": config.xmpp.api.secretKey}
            };
            var uri = config.xmpp.adminHttpService + config.xmpp.api.path.users;
            client.post(uri, args, function (data, response) {
                //Send user
                res.json(user);
            });
        }
    });
};

/**
 * Update a User
 */
exports.update = function (req, res) {
    var user = req.model;

    //For security purposes only merge these parameters
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.displayName = user.firstName + ' ' + user.lastName;
    user.roles = req.body.roles;

    user.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        res.json(user);
    });
};

/**
 * Delete a user
 */
exports.delete = function (req, res) {
    var user = req.model;

    user.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        res.json(user);
    });
};

/**
 * List of Users
 */
exports.list = function (req, res) {
    User.find({}, '-salt -password').sort('-created').populate('user', 'displayName').exec(function (err, users) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }

        res.json(users);
    });
};

/**
 * User middleware
 */
exports.userByID = function (req, res, next, id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'User is invalid'
        });
    }

    User.findById(id, '-salt -password').exec(function (err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            return next(new Error('Failed to load user ' + id));
        }

        req.model = user;
        next();
    });
};
