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
    .config(($stateProvider, $httpProvider) => {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'SecurityController',
            controllerAs: 'secCtrl',
            templateUrl: SigninTemplate.name
        });

        // Set the httpProvider "not authorized" interceptor
        $httpProvider.interceptors.push(['$q', '$location', 'AuthenticationService',
            function ($q, $location, AuthenticationService) {
                return {
                    responseError: function (rejection) {
                        switch (rejection.status) {
                            case 401:
                                // Deauthenticate the global user
                                AuthenticationService.getCredentials().user = null;

                                // Redirect to signin page
                                $location.path('login');
                                break;
                            case 403:
                                // Add unauthorized behaviour
                                break;
                        }

                        return $q.reject(rejection);
                    }
                };
            }
        ]);
    });

securityModule.run(() => {

});

export default securityModule;
