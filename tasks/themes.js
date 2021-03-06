var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var changed = require('gulp-changed');
var cache = require('gulp-cached');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var sass = require('gulp-sass');
var lessPluginCleanCSS = require("less-plugin-clean-css");
var cleancss = new lessPluginCleanCSS({advanced: true});
var rename = require("gulp-rename");

/**
 * Css tasks
 */
gulp.task('css', function () {
    return gulp.src(config.path.css)
        .pipe(cache('css'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.output));
});

gulp.task('css-themes', function () {
    return gulp.src(config.path.themes)
        .pipe(cache('css-themes'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.themesOutput));
});

/**
 * Less tasks
 */
gulp.task('less', function () {
    return gulp.src(config.path.less)
        .pipe(cache('less'))
        .pipe(plumber())
        .pipe(changed(config.path.output, {extension: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.path.outputCss));
});

gulp.task('less-themes', function () {
    return gulp.src(config.path.themes)
        .pipe(cache('less-themes'))
        .pipe(plumber())
        .pipe(changed(config.path.outputCss, {extension: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.path.themesOutput));
});

/**
 * Sass tasks
 */
gulp.task('sass', function () {
    var env = process.env.NODE_ENV;
    var sassConfig = {compact: true, comments: false};
    if (env == "production") {
        sassConfig.outputStyle = 'compressed';
    }
    return gulp.src(config.path.sass)
        .pipe(cache('sass'))
        .pipe(plumber())
        .pipe(changed(config.path.output, {extension: '.css'}))
        //.pipe(sourcemaps.init())
        .pipe(sass(sassConfig).on('error', sass.logError))
        //.pipe(sourcemaps.write())
        .pipe(rename(function (path) {
            //Copy in css folder
            path.dirname += "/../css";
            path.basename += ".min";
        }))
        .pipe(gulp.dest(config.path.outputCss));
});
