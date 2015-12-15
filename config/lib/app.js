'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
    mongoose = require('./mongoose'),
    express = require('./express'),
    chalk = require('chalk'),
    https = require("https"),
    fs = require("fs");

// Initialize Models
mongoose.loadModels();

//SeedDB
if (config.seedDB) {
    require('./seed');
}

module.exports.loadModels = function loadModels() {
    mongoose.loadModels();
};

module.exports.init = function init(callback) {
    mongoose.connect(function (db) {
        // Initialize express
        var app = express.init(db);
        if (callback) callback(app, db, config);

    });
};

module.exports.start = function start(callback) {
    var _this = this;

    _this.init(function (app, db, config) {
        var secure = (config.secure && config.secure.ssl) ? true : false;
        //Https server
        //var secure = false;
        //if (config.secure && config.secure.ssl) {
        //    secure = true;
        //    var httpsConfig = {
        //        key: fs.readFileSync(config.secure.privateKey),
        //        cert: fs.readFileSync(config.secure.certificate)
        //    };
        //    app = https.createServer(httpsConfig, app);
        //    config.port = 443;
        //}
        // Start the app by listening on <port>
        app.listen(config.port, function () {
            // Logging initialization
            console.log('---- Started express web server ----');
            console.log(chalk.bold.green(config.app.title));
            console.log(chalk.green('Environment:\t\t' + process.env.NODE_ENV));
            console.log(chalk.green('Port:\t\t\t' + config.port));
            console.log(chalk.green('Database:\t\t' + config.db.uri));
            //if (process.env.NODE_ENV === 'secure') {
            if (secure) {
                console.log(chalk.green('HTTPs:\t\t\ton'));
            }
            console.log(chalk.green('App version:\t\t' + config.meanrr.version));
            if (config.meanrr['meanrr-version'])
                console.log(chalk.green('MEANRR version:\t\t' + config.meanrr['meanrr-version']));
            console.log('------------------------------------');

            if (callback) callback(app, db, config);
        });

    });

};
