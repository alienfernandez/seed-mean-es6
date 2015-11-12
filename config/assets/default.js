'use strict';

module.exports = {
    server: {
        gulpConfig: 'gulpfile.js',
        allJS: ['server.js', 'config/**/*.js', 'app/packages/**/server/**/*.js'],
        models: 'src/packages/**/server/models/**/*.js',
        config: 'src/packages/**/server/config/*.js',
        routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
        policies: 'app/packages/**/server/policies/*.js'
    }
};
