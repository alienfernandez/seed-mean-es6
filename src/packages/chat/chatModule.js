import angular from 'angular';

//Import all module templates
import * as Templates from './templates';

import {commonModule} from 'commons';
//Import config module class
import ChatConfig from './web/config/chat.config';

let chatModule = angular.module('app.blog', [
    'common', Templates.ChatTpl.name
]).config(($stateProvider) => {
    //Init module routes
    new ChatConfig($stateProvider, Templates).initModuleRoutes();
});

/**
 * Run module
 */
chatModule.run(() => {

});

export default chatModule;
