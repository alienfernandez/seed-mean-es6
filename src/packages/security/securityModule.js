import angular from 'angular';
//Import libs react
import 'react-js';

import debug from 'debug';

//Import templates
import SigninTemplate from './web/views/authentication/signinView.tpl';
import UserEditTemplate from './web/views/admin/editUserView.tpl';
import AddUserTemplate from './web/views/admin/addUserView.tpl';
import UserListTemplate from './web/views/admin/userListView.tpl';

import {commonModule} from 'commons';

/**
 * Security module
 */
let securityModule = angular.module('app.security',
    [
        SigninTemplate.name,
        UserEditTemplate.name,
        AddUserTemplate.name,
        UserListTemplate.name
    ])
    .config(($stateProvider, $httpProvider) => {
        $stateProvider.state('authentication', {
            abstract: true,
            template: '<ui-view/>'
        }).state('authentication.signin', {
            url: '/signin?err',
            controller: 'SecurityController',
            controllerAs: 'secCtrl',
            templateUrl: SigninTemplate.name
        }).state('authentication.signup', {
            url: '/signup',
            controller: 'SecurityController',
            controllerAs: 'secCtrl',
            templateUrl: SigninTemplate.name
        }).state('useradd', {
            url: '/users/create',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            templateUrl: AddUserTemplate.name
        }).state('userlist', {
            url: '/users/list',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            templateUrl: UserListTemplate.name
        }).state('useredit', {
            url: '/users/edit/:userId',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            templateUrl: UserEditTemplate.name
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

});

export default securityModule;
