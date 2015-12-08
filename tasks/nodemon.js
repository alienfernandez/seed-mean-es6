var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    config = require('../config'),
    _ = require('lodash'),
    defaultAssets = require('../config/assets/default');


gulp.task('nodemon', function () {
    return nodemon({
        script: 'server.js',
        nodeArgs: ['--debug'],
        env: {'NODE_ENV': process.env.NODE_ENV || 'development'},
        ext: 'js,html',
    }).on('start', ['watch'])
        .on('change', ['watch'])
        .on('restart', function () {
            console.log('Nodemon restarted!');
        });
});

gulp.task('watch', ['rebuild'], function () {
    var watchFiles = [config.path.allJsSource, config.path.html, config.path.less, config.path.sass, config.path.json];
    //console.log("watchFiles", watchFiles);
    var watcher = gulp.watch(watchFiles, ['build']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});