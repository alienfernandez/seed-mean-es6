import angular from 'angular';

import {commonModule} from 'commons';

import security from '../security';

import Template400 from './web/views/400.tpl';
import Template403 from './web/views/403.tpl';
import Template404 from './web/views/404.tpl';
import HomeTemplate from './web/views/home.tpl';

let coreModule = angular.module("app.core", [
    Template400.name,
    Template403.name,
    Template404.name,
    HomeTemplate.name,
    'app.security'
]);


coreModule.config(($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) => {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('AuthInterceptor');
    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
        $injector.get('$state').transitionTo('not-found', null, {
            location: false
        });
    });
    // Home state routing
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: HomeTemplate.name
        })
        .state('not-found', {
            url: '/not-found',
            templateUrl: Template404.name,
            data: {
                ignoreState: true
            }
        })
        .state('bad-request', {
            url: '/bad-request',
            templateUrl: Template400.name,
            data: {
                ignoreState: true
            }
        })
        .state('forbidden', {
            url: '/forbidden',
            templateUrl: Template403.name,
            data: {
                ignoreState: true
            }
        });
});

coreModule.run(($rootScope, $state, AuthenticationService) => {
    console.log("Run core module");
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('toState', toState)
        console.log('toParams', toParams)
        if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
            var allowed = false;
            toState.data.roles.forEach(function (role) {
                if (AuthenticationService.user && AuthenticationService.user.roles !== undefined &&
                    AuthenticationService.user.roles.indexOf(role) !== -1) {
                    allowed = true;
                    return true;
                }
            });

            if (!allowed) {
                event.preventDefault();
                if (AuthenticationService.user !== undefined && typeof AuthenticationService.user === 'object') {
                    $state.go('forbidden');
                } else {
                    $state.go('authentication.signin').then(function () {
                        storePreviousState(toState, toParams);
                    });
                }
            }
        }
    });

    // Record previous state
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        storePreviousState(fromState, fromParams);
    });

    // Store previous state
    function storePreviousState(state, params) {
        // only store this state if it shouldn't be ignored
        if (!state.data || !state.data.ignoreState) {
            $state.previous = {
                state: state,
                params: params,
                href: $state.href(state, params)
            };
        }
    }
})


export default coreModule;
