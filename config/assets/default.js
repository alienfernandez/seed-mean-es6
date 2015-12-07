'use strict';

module.exports = {
    client: {
        lib: {
            css: [
                'public/jspm_packages/github/twbs/bootstrap@3.3.5/css/bootstrap.css',
                'public/jspm_packages/github/twbs/bootstrap@3.3.5/css/bootstrap-theme.css'
            ],
            js: [
                'public/jspm_packages/github/angular/bower-angular@1.4.8/angular.js',
                'public/jspm_packages/github/angular/bower-angular-resource@1.4.8/angular-resource.js',
                'public/jspm_packages/github/angular/bower-angular-animate@1.4.7/angular-animate.js',
                'public/jspm_packages/github/angular-ui/ui-router@0.2.15/angular-ui-router.js'
            ],
            tests: ['public/jspm_packages/github/angular/bower-angular-mocks@1.4.8/angular-mocks.js']
        },
        css: [
            'src/packages/**/web/assets/css/*.css'
        ],
        less: [
            'src/packages/**/web/assets/less/*.less'
        ],
        sass: [
            'src/packages/**/web/assets/sass/*.scss'
        ],
        js: [
            'src/packages/**/web/*.js',
            'src/packages/**/web/**/*.js'
        ],
        views: ['src/packages/**/web/views/**/*.html']
    },
    server: {
        gulpConfig: 'gulpfile.js',
        allJS: ['server.js', 'config/**/*.js', 'app/packages/**/server/**/*.js'],
        models: 'src/packages/**/server/models/**/*.js',
        config: 'src/packages/**/server/config/*.js',
        routes: ['src/packages/!(core)/**/server/routes/**/*.js', 'src/packages/core/**/server/routes/**/*.js'],
        sockets: 'src/packages/**/server/sockets/*.js',
        policies: 'src/packages/**/server/policies/*.js'
    }
};
