var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('express', function () {
    // Start the server at the beginning of the task
    server.run(['server.js']);
});