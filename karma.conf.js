// Karma configuration
// ulimit -n 10480
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm', 'jasmine'],

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // list of files / patterns to load in the browser
        files: [],

        jspm: {
            // Edit this to your needs
            config: 'public/system.config.js',
            loadFiles: [
                'src/packages/**/test/**/*.js'
            ],
            serveFiles: [
                'public/**/**'
            ]
        },

        //proxies: {
        //  '/base/app': '/base/dist/app',
        //  '/base/common': '/base/dist/common',
        //  '/jspm_packages': '/base/jspm_packages'
        //},

        // list of files to exclude
        exclude: [],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/tests/web/*.js': ['babel', 'coverage']
        },

        'babelPreprocessor': {
            options: {
                sourceMap: 'inline',
                modules: 'system'
            }
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }

    });
};