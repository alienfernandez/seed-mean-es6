'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    defaultAssets = require('./config/assets/default'),
    testAssets = require('./config/assets/test'),
    testConfig = require('./config/env/test'),
    karmaReporters = ['progress'];

if (testConfig.coverage) {
    karmaReporters.push('coverage');
}

// Karma configuration
module.exports = function (karmaConfig) {
    karmaConfig.set({
        basePath: './',
        // Frameworks to use
        frameworks: ['systemjs', 'jasmine'],
        plugins: [
            'karma-systemjs', 'karma-jasmine', 'karma-ng-html2js-preprocessor', 'karma-chrome-launcher', 'karma-coverage',
            'karma-firefox-launcher', 'karma-jspm', 'karma-babel-preprocessor'
        ],
        systemjs: {
            // Path to your SystemJS configuration file
            configFile: 'public/system.config.js',

            //files: _.union(defaultAssets.client.lib.js, defaultAssets.client.lib.tests, defaultAssets.client.publicJs,
            //    testAssets.tests.clientPublic, defaultAssets.client.publicViews),
            serveFiles: [
                'src/**/*.js'
            ],

            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            config: {
                paths: {
                    'angular-mocks': defaultAssets.client.lib.tests[0]
                }
            }
        },
        preprocessors: {
            //'src/packages/*/web/views/**/*.html': ['ng-html2js'],
            ////'src/packages/common/**/*.js': ['babel', 'coverage'],
            //'src/packages/**/*.js': ['babel', 'coverage'],
            //'src/packages/*/web/*.js': ['babel', 'coverage'],
            //'src/packages/*/web/react-components/*.js': ['babel', 'coverage'],
            //'src/packages/*/web/controllers/*.js': ['babel', 'coverage'],
            //'src/packages/*/web/directives/*.js': ['babel', 'coverage'],
            //'src/packages/*/web/services/*.js': ['babel', 'coverage']
        },

        babelPreprocessor: {
            options: {sourceMap: 'inline'}
        },
        //ngHtml2JsPreprocessor: {
        //    moduleName: 'meanrr',
        //
        //    cacheIdFromPath: function (filepath) {
        //        return filepath;
        //    },
        //},
        // List of files / patterns to load in the browser
        files: _.union(defaultAssets.client.lib.js, defaultAssets.client.lib.tests, defaultAssets.client.publicJs,
            testAssets.tests.clientPublic, defaultAssets.client.publicViews),
        //files: [
        //    'src/**/test/**/*.js'
        //],
        // Test results reporter to use
        // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: karmaReporters,

        // Configure the coverage reporter
        coverageReporter: {
            dir: 'coverage/client',
            reporters: [
                // Reporters not supporting the `file` property
                {type: 'html', subdir: 'report-html'},
                {type: 'lcov', subdir: 'report-lcov'},
                // Output coverage to console
                {type: 'text'}
            ],
            instrumenterOptions: {
                istanbul: {noCompact: true}
            }
        },

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: karmaConfig.LOG_DISABLE || karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN || karmaConfig.LOG_INFO || karmaConfig.LOG_DEBUG
        logLevel: karmaConfig.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // If true, it capture browsers, run tests and exit
        singleRun: true
    });
};
