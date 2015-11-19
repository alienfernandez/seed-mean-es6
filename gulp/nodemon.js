var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
    var started = false;

    //return nodemon({
    //    script: 'server.js'
    //}).on('start', function () {
    //    // to avoid nodemon being started multiple times
    //    // thanks @matthisk
    //    if (!started) {
    //        cb();
    //        started = true;
    //    }
    //});
});