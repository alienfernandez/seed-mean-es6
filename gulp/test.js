var gulp = require('gulp'),
    _ = require('lodash'),
    testAssets = require('../config/assets/test'),
//gulpLoadPlugins = require('gulp-load-plugins'),
//plugins = gulpLoadPlugins(),
    csslint = require('gulp-csslint'),
    jshint = require('gulp-jshint'),
    eslint = require('gulp-eslint'),
    defaultAssets = require('../config/assets/default'),
    testAssets = require('../config/assets/test'),
    runSequence = require('run-sequence');

// CSS linting task
gulp.task('csslint', function (done) {
    return gulp.src(defaultAssets.client.css)
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter())
        .pipe(csslint.reporter(function (file) {
            if (!file.csslint.errorCount) {
                done();
            }
        }));
});

// JS linting task
gulp.task('jshint', function () {
    var assets = _.union(
        defaultAssets.server.gulpConfig,
        defaultAssets.server.allJS,
        defaultAssets.client.js,
        testAssets.tests.server,
        testAssets.tests.client,
        testAssets.tests.e2e
    );

    return gulp.src(assets)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    //.pipe(jshint.reporter('fail'))
});


// ESLint JS linting task
gulp.task('eslint', function () {
    var assets = _.union(
        defaultAssets.server.gulpConfig,
        defaultAssets.server.allJS,
        defaultAssets.client.js,
        testAssets.tests.server,
        testAssets.tests.client,
        testAssets.tests.e2e
    );

    return gulp.src(assets)
        .pipe(eslint())
        .pipe(eslint.format());
});

// Mocha tests task
gulp.task('mocha', function (done) {
    // Open mongoose connections
    var mongoose = require('../config/lib/mongoose.js');
    var error;

    // Connect mongoose
    mongoose.connect(function () {
        mongoose.loadModels();
        // Run the tests
        gulp.src(testAssets.tests.server)
            .pipe(plugins.mocha({
                reporter: 'spec',
                timeout: 10000
            }))
            .on('error', function (err) {
                // If an error occurs, save it
                error = err;
            })
            .on('end', function () {
                // When the tests are done, disconnect mongoose and pass the error state back to gulp
                mongoose.disconnect(function () {
                    done(error);
                });
            });
    });

});

// Karma test runner task
gulp.task('karma', function (done) {
    return gulp.src([])
        .pipe(plugins.karma({
            configFile: '../karma.conf.js',
            action: 'run',
            singleRun: true
        }));
});

// Lint CSS and JavaScript files.
gulp.task('lint', function (done) {
    runSequence(['csslint', 'eslint', 'jshint'], done);
});

// Run the project tests
gulp.task('test', function (done) {
    runSequence('env:test', 'lint', 'mocha', 'karma', done);
});

gulp.task('test:server', function (done) {
    runSequence('env:test', 'lint', 'mocha', done);
});

gulp.task('test:client', function (done) {
    runSequence('env:test', 'lint', 'karma', done);
});