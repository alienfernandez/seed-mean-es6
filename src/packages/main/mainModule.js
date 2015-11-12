import angular from 'angular';
import debug from 'debug';

import LayoutTemplate from './web/views/layout/layout.tpl';
import HeaderTemplate from './web/views/header.tpl';
import SideBarTemplate from './web/views/sidebar.tpl';
import ContentTemplate from './web/views/content.tpl';

import './web/assets/css/theme.css!';
import cliMessage from './web/assets/messages/cliMessage.json!';
import {commonModule} from 'commons';
import 'bower-ui-grid';
import 'ui-select';
import 'v-accordion';

let mainModule = angular.module('app.main', [
    HeaderTemplate.name,
    SideBarTemplate.name,
    ContentTemplate.name,
    LayoutTemplate.name,
    commonModule.name,
    'ui.grid', 'ui.grid.exporter', 'ui.grid.pagination', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.autoResize',
    'ui.select', 'vAccordion'
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

mainModule.run((comLoadingService, configFactory, comAlertMessageFactory, i18nService) => {
    i18nService.setCurrentLang('es');
    comAlertMessageFactory.registryDefinitionMessage(cliMessage);
    debug.enable('cor:*');
    comLoadingService.show();
    configFactory.loadConfigHost()
        .then(()=> {
            comLoadingService.hide();
        })
        .catch((error) => {
            comAlertMessageFactory.showError([error.men]);
        });
});

export default mainModule;
