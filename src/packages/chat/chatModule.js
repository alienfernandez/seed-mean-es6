import angular from 'angular';

//Import all module templates
import * as Templates from './templates';

import {commonModule} from 'commons';

let chatModule = angular.module('app.blog', [
    'common', Templates.ChatTemplate.name
])
    .config(($stateProvider) => {
        $stateProvider.state('chat', {
            url: '/chat',
            controller: 'ChatController',
            controllerAs: 'chatCtrl',
            templateUrl: Templates.ChatTemplate.name,
            data: {
                roles: ['user', 'admin']
            }
        });
    });

/**
 * Run blog module
 */
chatModule.run(() => {

});

export default chatModule;
