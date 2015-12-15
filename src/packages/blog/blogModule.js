import angular from 'angular';

//Admin views
import AddArticleTemplate from './web/views/admin/add-article-view.tpl';
import EditArticleTemplate from './web/views/admin/edit-article-view.tpl';
import ArticleListTemplate from './web/views/admin/article-list-view.tpl';
//Blog views
import BlogArticleListTemplate from './web/views/blog/article-list-view.tpl';

import {commonModule} from 'commons';

let blogModule = angular.module('app.blog', [
    AddArticleTemplate.name,
    EditArticleTemplate.name,
    ArticleListTemplate.name,
    BlogArticleListTemplate.name
])
    .config(($stateProvider) => {
        $stateProvider.state('add-article', {
            url: '/articles/create',
            controller: 'ArticleController',
            controllerAs: 'articleCtrl',
            templateUrl: AddArticleTemplate.name,
            data: {
                roles: ['user', 'admin']
            }
        }).state('article-list', {
            url: '/articles/list',
            controller: 'ArticleController',
            controllerAs: 'articleCtrl',
            templateUrl: ArticleListTemplate.name
        }).state('edit-article', {
            url: '/articles/edit/:articleId',
            controller: 'ArticleController',
            controllerAs: 'articleCtrl',
            templateUrl: EditArticleTemplate.name,
            data: {
                roles: ['user', 'admin']
            }
        }).state('blog-article-list', {
            url: '/blog',
            controller: 'BlogController',
            controllerAs: 'blogCtrl',
            templateUrl: BlogArticleListTemplate.name
        });
    });

/**
 * Run blog module
 */
blogModule.run(() => {

});

export default blogModule;
