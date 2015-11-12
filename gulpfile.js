'use strict';
//Importando Modulos
//Modulo que permite correr tareas automaticas
var gulp = require('gulp');
var wrench = require('wrench');

/**
* Esto cargara archivos que se encuentran dentro del directorio
* gulp in el oreden de las tareas de gulp
*/
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return(/\.(js|coffe)$/i).test(file);
}).map(function(file){
  require('./gulp/' + file);
});

gulp.task('default', ['watch']);
