var browserSync = require('browser-sync');
var cache = require('gulp-cached');
var changed = require('gulp-changed');
var config = require('../config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
  return gulp.src(config.path.inputSass)
    .pipe(cache('sass'))
    .pipe(plumber())
    .pipe(changed(config.path.output, {extension: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.path.outputCss))
    .pipe(browserSync.reload({stream: true}));
});