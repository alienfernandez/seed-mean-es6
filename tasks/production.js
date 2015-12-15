var gulp = require('gulp'),
    defaultAssets = require('../config/assets/default'),
    _ = require('lodash'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate');

// JS minifying task
gulp.task('uglify', function () {
    var assets = _.union(
        defaultAssets.client.publicJs
    );

    return gulp.src(assets)
        .pipe(ngAnnotate())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(concat('application.min.js'))
        .pipe(gulp.dest('public/dist'));
});

// CSS minifying task
gulp.task('cssmin', function () {
    return gulp.src(defaultAssets.client.css)
        .pipe(cssmin())
        .pipe(concat('application.min.css'))
        .pipe(gulp.dest('public/dist'));
});