import angular from 'angular';

//Admin views
import ChatTemplate from './web/views/chat-view.tpl';

import {commonModule} from 'commons';

let chatModule = angular.module('app.blog', [
    'common',
    ChatTemplate.name
])
    .config(($stateProvider) => {
        $stateProvider.state('chat', {
            url: '/chat',
            controller: 'ChatController',
            controllerAs: 'chatCtrl',
            templateUrl: ChatTemplate.name,
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
