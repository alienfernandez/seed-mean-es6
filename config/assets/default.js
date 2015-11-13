'use strict';

module.exports = {
    server: {
        gulpConfig: 'gulpfile.js',
        allJS: ['server.js', 'config/**/*.js', 'app/packages/**/server/**/*.js'],
        models: 'src/packages/**/server/models/**/*.js',
        config: 'src/packages/**/server/config/*.js',
        routes: ['src/packages/!(core)/**/server/routes/**/*.js', 'src/packages/core/**/server/routes/**/*.js'],
        policies: 'src/packages/**/server/policies/*.js'
    }
};
