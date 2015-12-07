var gulp = require('gulp'),
    config = require('../config'),
    _ = require('lodash'),
    defaultAssets = require('../config/assets/default');

gulp.task('watch', ['recompile'], function () {
    var watchFiles = [config.path.allJsSource, config.path.html, config.path.less, config.path.sass, config.path.json];
    //console.log("watchFiles", watchFiles);
    var watcher = gulp.watch(watchFiles, ['compile']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});