import angular from 'angular';

import AddArticleTemplate from './web/views/admin/add-article-view.tpl';

import {commonModule} from 'commons';

let blogModule = angular.module('app.blog', [
    AddArticleTemplate.name
])
    .config(($stateProvider) => {
        $stateProvider.state('addarticle', {
            url: '/articles/create',
            controller: 'ArticleController',
            controllerAs: 'articleCtrl',
            templateUrl: AddArticleTemplate.name,
            //data: {
            //    roles: ['admin']
            //}
        });
    });

/**
 * Run blog module
 */
blogModule.run(() => {

});

export default blogModule;
