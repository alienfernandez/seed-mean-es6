var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');
var config = require('../config');
var cache = require('gulp-cached');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var htmlMin = require('gulp-minify-html');
var ngHtml2Js = require('gulp-ng-html2js');
var templateCache = require('gulp-angular-templatecache');

gulp.task('clean', function () {
    return gulp.src([config.path.output])
        .pipe(vinylPaths(del));
});

/**
 * Copy resources (images|json)
 */
gulp.task('move', function () {
    return gulp.src([
        './src/**/*.json', './src/**/*.svg', './src/**/*.woff', './src/**/*.ttf',
        './src/**/*.png', './src/**/*.gif', './src/**/*.ico', './src/**/*.jpg', './src/**/*.eot'
    ]).pipe(cache('move'))
        .pipe(gulp.dest(config.path.output));
});

/**
 * Copy config
 */
gulp.task('config', function () {
    return gulp.src([
        './config/env/*.js'
    ]).pipe(cache('moveConfig'))
        .pipe(gulp.dest(config.path.outputConfig));
});

/**
 * Compile html templates
 */
gulp.task('template', function () {
    return gulp.src('src/**/templates/*.tpl.html')
        .pipe(templateCache())
        .pipe(gulp.dest('public/assets/templates/'));
});

gulp.task('html', function () {
    return gulp.src(config.path.templates)
        .pipe(cache('html'))
        .pipe(plumber())
        .pipe(changed(config.path.output, {
            extension: '.html'
        }))
        .pipe(htmlMin({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            template: "import angular from 'angular';\n" +
            "export default angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" +
            "   $templateCache.put('<%= template.url %>',\n    '<%= template.prettyEscapedContent %>');\n" +
            "}]);\n"
        }))
        .pipe(babel(config.compilerOptions))
        .pipe(gulp.dest(config.path.output))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/**
 * Copy es5 resources
 */
gulp.task('es5', function () {
    return gulp.src(config.path.sourceES5)
        .pipe(cache('es5'))
        .pipe(plumber())
        .pipe(changed(config.path.output, {
            extension: '.js'
        }))
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate({
            sourceMap: true,
            gulpWarnings: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.output))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/**
 * Compile es6 resources
 */
gulp.task('es6', function () {
    return gulp.src(config.path.source)
        .pipe(cache('es6'))
        .pipe(plumber())
        .pipe(changed(config.path.output, {
            extension: '.js'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel(config.compilerOptions))
        .pipe(ngAnnotate({
            sourceMap: true,
            gulpWarnings: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.output))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function (callback) {
    return runSequence(['sass', 'css', 'html', 'es6', 'es5', 'move', 'config'], callback);
});

// Lint project files and minify them into two production files.
gulp.task('build-prod', function (done) {
    //runSequence('env:dev', 'lint', 'build', ['uglify', 'cssmin'], done);
    runSequence('env:dev', 'build', ['uglify', 'cssmin'], done);
});

gulp.task('rebuild', function (callback) {
    return runSequence('clean', ['build'], callback);
});