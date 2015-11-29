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
        $stateProvider.state('login', {
            url: '/login',
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
