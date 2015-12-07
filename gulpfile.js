'use strict';
//Importando Modulos
//Modulo que permite correr tareas automaticas
var gulp = require('gulp');
var wrench = require('wrench'),
    runSequence = require('run-sequence');

/**
 * Esto cargara archivos que se encuentran dentro del directorio
 * gulp in el oreden de las tareas de gulp
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffe)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

// Set NODE_ENV to 'test'
gulp.task('env:test', function () {
    process.env.NODE_ENV = 'test';
});

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
    process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
    process.env.NODE_ENV = 'production';
});

//gulp.task('default', ['watch']);
// Run the project in development mode
gulp.task('default', function (done) {
    runSequence('env:dev', 'lint', 'watch', done);//'lint',
});

// Run the project in production mode
gulp.task('prod', function (done) {
    runSequence('compile', 'env:prod', done);
});
