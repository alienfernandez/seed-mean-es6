var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
    return nodemon({
        script: 'server.js',
        nodeArgs: ['--debug'],
        ext: 'js,html',
    }).on('start', ['watch'])
        .on('change', ['watch'])
        .on('restart', function () {
            console.log('Nodemon restarted!');
        });
});