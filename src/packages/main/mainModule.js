import angular from 'angular';
//Import libs react
import 'react-js';
//import 'ngReact';
import debug from 'debug';

import LayoutTemplate from './web/views/layout/layout.tpl';
import HeaderTemplate from './web/views/header.tpl';
import SideBarTemplate from './web/views/sidebar.tpl';
import ContentTemplate from './web/views/content.tpl';

import './web/assets/css/theme.css!';
import cliMessage from './web/assets/messages/cliMessage.json!';
import {commonModule} from 'commons';

let mainModule = angular.module('app.main', [
    HeaderTemplate.name,
    SideBarTemplate.name,
    ContentTemplate.name,
    LayoutTemplate.name,
    commonModule.name
])
    .config(($stateProvider) => {
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'mainController',
                controllerAs: 'mainCtrl',
                templateUrl: LayoutTemplate.name,
            }).state('main.layout', {
                views: {
                    'headBar': {
                        controller: 'headerController',
                        controllerAs: 'headerCtrl',
                        templateUrl: HeaderTemplate.name
                    }
                    ,
                    'sideBar': {
                        controller: 'mainSidebarController',
                        controllerAs: 'sidebarCtrl',
                        templateUrl: SideBarTemplate.name
                    },
                    'content': {
                        controller: 'mainContentController',
                        controllerAs: 'contentCtrl',
                        templateUrl: ContentTemplate.name
                    }
                },
            });
    });

mainModule.run((comAlertMessageFactory) => {
    //comAlertMessageFactory.registryDefinitionMessage(cliMessage);
});

export default mainModule;
