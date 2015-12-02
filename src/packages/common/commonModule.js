import angular from 'angular';
//Import lodash
import 'ng-lodash';
import security from '../security';
console.log("security", security)

import Template400 from './views/400.tpl';
import Template403 from './views/403.tpl';
import Template404 from './views/404.tpl';
import HomeTemplate from './views/home.tpl';

/**
 * Creando módulo de utilidades
 */
let commonModule = angular.module('common', [
    'ngLodash',
    Template400.name,
    Template403.name,
    Template404.name,
    HomeTemplate.name,
]);

commonModule.config(($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) => {
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

commonModule.run(($rootScope, $state) => { //, AuthenticationService
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('toState', toState)
        console.log('toParams', toParams)
        if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
            var allowed = false;
            //toState.data.roles.forEach(function (role) {
            //    if (AuthenticationService.user.roles !== undefined && AuthenticationService.user.roles.indexOf(role) !== -1) {
            //        allowed = true;
            //        return true;
            //    }
            //});

            if (!allowed) {
                event.preventDefault();
                $state.go('authentication.signin').then(function () {
                    storePreviousState(toState, toParams);
                });
                //if (AuthenticationService.user !== undefined && typeof AuthenticationService.user === 'object') {
                //    $state.go('forbidden');
                //} else {
                //    $state.go('authentication.signin').then(function () {
                //        storePreviousState(toState, toParams);
                //    });
                //}
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

export default commonModule;
