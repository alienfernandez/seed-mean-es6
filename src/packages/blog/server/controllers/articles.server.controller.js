'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    multer = require('multer'),
    config = require(path.resolve('./config/config')),
    errorHandler = require(path.resolve('./src/packages/core/system/server/controllers/errors.server.controller'));

/**
 * Create a article
 */
exports.create = function (req, res) {
    var article = new Article(req.body);
    article.user = req.user;

    article.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(article);
        }
    });
};

exports.createArticle = function (req, res) {
    var articleUploadImg = './public/app/packages/blog/web/img/uploads/';
    var user = req.user;
    var multerConfig = require(path.resolve('./config/lib/multer'));
    var uploadFileFilter = multerConfig.profileUploadFileFilter;
    var upload = multer({
        dest: articleUploadImg, // Upload destination path
        limits: {
            fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
        }
    }).single('imageURL');
    // Filtering to upload only images
    upload.fileFilter = uploadFileFilter;
    if (user) {
        //New Article
        var article = new Article(req.body);
        article.user = user;
        console.log("req", req)
        //upload(req, res, function (uploadError) {
        //    if (uploadError) {
        //        return res.status(400).send({
        //            message: 'Error occurred while uploading article picture'
        //        });
        //    } else {
        //        article.imageURL = articleUploadImg + req.file.filename;
        //        article.save(function (err) {
        //            if (err) {
        //                return res.status(400).send({
        //                    message: errorHandler.getErrorMessage(err)
        //                });
        //            } else {
        //                res.json(article);
        //            }
        //        });
        //    }
        //});
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
    res.json(req.article);
};

/**
 * Update a article
 */
exports.update = function (req, res) {
    var article = req.article;

    article.title = req.body.title;
    article.content = req.body.content;

    article.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(article);
        }
    });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
    var article = req.article;

    article.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(article);
        }
    });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
    Article.find().sort('-created').populate('user', 'displayName').exec(function (err, articles) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(articles);
        }
    });
};

/**
 * Article middleware
 */
exports.articleByID = function (req, res, next, id) {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    Article.findById(id).populate('user', 'displayName').exec(function (err, article) {
        if (err) {
            return next(err);
        } else if (!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        req.article = article;
        next();
    });
};
