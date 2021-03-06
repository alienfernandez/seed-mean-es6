'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    errorHandler = require(path.resolve('./src/packages/core/system/server/controllers/errors.server.controller')),
    mongoose = require('mongoose'),
    multer = require('multer'),
    config = require(path.resolve('./config/config')),
    User = mongoose.model('User');

/**
 * Update user details
 */
exports.update = function (req, res) {
    // Init Variables
    var user = req.user;

    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;

    if (user) {
        // Merge existing user
        user = _.extend(user, req.body);
        user.updated = Date.now();
        user.displayName = user.firstName + ' ' + user.lastName;

        user.save(function (err) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                req.login(user, function (err) {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.json(user);
                    }
                });
            }
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};

/**
 * Update profile picture
 */
exports.changeProfilePicture = function (req, res) {
    var user = req.user;
    var multerConfig = require(path.resolve('./config/lib/multer'));
    var profileUploadFileFilter = multerConfig.profileUploadFileFilter;
    var storage = multerConfig.getDiskStorage(config.uploads.profileUpload.dest);
    config.uploads.profileUpload.storage = storage;
    var upload = multer(config.uploads.profileUpload).single('file');
    // Filtering to upload only images
    upload.fileFilter = profileUploadFileFilter;
    if (user) {
        upload(req, res, function (uploadError) {
            if (uploadError) {
                return res.status(400).send({
                    message: 'Error occurred while uploading profile picture'
                });
            } else {
                user.profileImageURL = config.uploads.profileUpload.dirStore + req.file.filename;

                user.save(function (saveError) {
                    if (saveError) {
                        return res.status(400).send({
                            message: errorHandler.getErrorMessage(saveError)
                        });
                    } else {
                        req.login(user, function (err) {
                            if (err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                });
            }
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};

/**
 * Send User
 */
exports.me = function (req, res) {
    if (!req.user || !req.user.hasOwnProperty('_id')) return res.send(null);

    User.findOne({
        _id: req.user._id
    }).exec(function (err, user) {

        if (err || !user) return res.send(null);


        var dbUser = user.toJSON();
        var id = req.user._id;

        delete dbUser._id;
        delete req.user._id;

        var eq = _.isEqual(dbUser, req.user);
        if (eq) {
            req.user._id = id;
            return res.json(req.user);
        }

        var payload = user;
        var escaped = JSON.stringify(payload);
        escaped = encodeURI(escaped);
        var token = jwt.sign(escaped, config.secret, {expiresInMinutes: 60 * 5});
        res.json({token: token});

    });
    //res.json(req.user || null);
};
