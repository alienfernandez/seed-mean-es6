'use strict';

var gulp = require('gulp');
var wrench = require('wrench'),
    runSequence = require('run-sequence');

/**
 * Load all task and include
 */
wrench.readdirSyncRecursive('./tasks').filter(function (file) {
    return (/\.(js|coffe)$/i).test(file);
}).map(function (file) {
    require('./tasks/' + file);
});

// Set NODE_ENV to 'test'
gulp.task('env:test', function () {
    process.env.NODE_ENV = 'test';
});

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
    process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
    process.env.NODE_ENV = 'production';
});

// Run the project in development mode
gulp.task('default', function (done) {
    runSequence('env:dev', 'lint', ['nodemon'], done);
});

// Run the project in production mode
gulp.task('prod', function (done) {
    //runSequence('build', 'env:prod', 'lint', ['nodemon'], done);
    runSequence('build-prod', 'env:prod', ['nodemon'], done);
});
