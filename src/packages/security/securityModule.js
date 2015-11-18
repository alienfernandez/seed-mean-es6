import angular from 'angular';
import debug from 'debug';

//Import templates
import SigninTemplate from './web/views/authentication/signinView.tpl';

import {commonModule} from 'commons';

/**
 * Security module
 */
let securityModule = angular.module('app.security',
    [
        SigninTemplate.name
    ])
    .config(($stateProvider) => {
        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'securityController',
                controllerAs: 'secCtrl',
                templateUrl: SigninTemplate.name
            });
    });

securityModule.run(() => {

});

export default securityModule;
