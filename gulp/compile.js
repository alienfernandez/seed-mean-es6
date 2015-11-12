var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', function (callback) {
    //, 'express'
    return runSequence(
        ['sass', 'less-themes', 'css', 'css-themes', 'html', 'es6', 'es5', 'move'],
        callback
    );
});

gulp.task('recompile', function (callback) {
    return runSequence(
        'clean', ['compile'],
        callback
    );
});
