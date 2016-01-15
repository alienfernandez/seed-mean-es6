import angular from 'angular';
//Import angular translate (i18n for your Angular app)
import 'angular-translate';
import 'angular-translate-loader-static';
import 'ag-grid';

//Import all module templates
import * as Templates from './templates';

//Import config module class
import BlogConfig from './web/config/blog.config';

import {commonModule} from 'commons';

let blogModule = angular.module('app.blog', [
    'pascalprecht.translate', 'agGrid',
    //Templates
    Templates.AddArticleTpl.name,
    Templates.EditArticleTpl.name,
    Templates.ArticleListTpl.name,
    Templates.BlogArticleListTpl.name
])
    .config(($stateProvider, $translateProvider) => {
        //Init module routes
        new BlogConfig($stateProvider, Templates).initModuleRoutes();

        //------------- $translateProvider i18n config ---------------
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/packages/blog/web/i18n/locale-',
            suffix: '.json'
        });
        //-------------------------------------------------------
    });

/**
 * Run blog module
 */
blogModule.run(() => {

});

export default blogModule;
