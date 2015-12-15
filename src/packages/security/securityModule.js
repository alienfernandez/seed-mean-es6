import angular from 'angular';

//Import all module templates
import * as Templates from './templates';

//Import common module
import {commonModule} from 'commons';

/**
 * Security module
 */
let securityModule = angular.module('app.security',
    [
        Templates.SigninTemplate.name, Templates.UserEditTemplate.name, Templates.AddUserTemplate.name,
        Templates.UserListTemplate.name, Templates.UserSettingsTemplate.name
    ])
    .config(($stateProvider, $httpProvider) => {
        $stateProvider.state('authentication', {
            abstract: true,
            template: '<ui-view/>'
        }).state('authentication.signin', {
            url: '/signin?err',
            controller: 'SecurityController',
            controllerAs: 'secCtrl',
            templateUrl: Templates.SigninTemplate.name
        }).state('authentication.signup', {
            url: '/signup',
            controller: 'SecurityController',
            controllerAs: 'secCtrl',
            templateUrl: Templates.SigninTemplate.name
        }).state('useradd', {
            url: '/users/create',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            templateUrl: Templates.AddUserTemplate.name,
            data: {
                roles: ['user', 'admin']
            }
        }).state('userlist', {
            url: '/users/list',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            templateUrl: Templates.UserListTemplate.name
        }).state('useredit', {
            url: '/users/edit/:userId',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            templateUrl: Templates.UserEditTemplate.name,
            data: {
                roles: ['user', 'admin']
            }
        }).state('settings', {
            abstract: true,
            url: '/settings',
            templateUrl: Templates.UserSettingsTemplate.name,
            data: {
                roles: ['user', 'admin']
            }
        }).state('settings.profile', {
            url: '/profile',
            templateUrl: Templates.UserProfileTemplate.name,
            controller: 'ProfileController',
            controllerAs: 'profileCtrl',
        }).state('settings.password', {
            url: '/password',
            templateUrl: Templates.ChangePasswordTemplate.name,
            controller: 'PasswordController',
            controllerAs: 'passwordCtrl',
        });

        // Set the httpProvider "not authorized" interceptor
        $httpProvider.interceptors.push(['$q', '$location', '$injector', 'AuthenticationService',
            function ($q, $location, $injector, AuthenticationService) {
                return {
                    responseError: function (rejection) {
                        console.log("rejection", rejection);
                        switch (rejection.status) {
                            case 401:
                                // Deauthenticate the global user
                                AuthenticationService.user = null;

                                // Redirect to signin page
                                $location.path('signin');
                                break;
                            case 403:
                                // Add unauthorized behaviour
                                $injector.get('$state').transitionTo('forbidden');
                                break;
                        }

                        return $q.reject(rejection);
                    }
                };
            }
        ]);
    });

securityModule.run(() => {
    console.log("Run security module");
});

export default securityModule;
