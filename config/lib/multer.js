'use strict';
var multer = require('multer');

module.exports.profileUploadFileFilter = function (req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' &&
        file.mimetype !== 'image/gif') {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

module.exports.getDiskStorage = function (path) {
    // Multer Storage to keep the file extension.
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            //Directory where the files are saved.
            cb(null, path);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '_' + file.originalname);
        }
    });
    return storage;
};