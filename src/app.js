import 'jquery';
import angular from 'angular';
import 'angular-material';
import 'bootstrap';
import 'angular-ui-router';
import 'ocLazyLoad';
import 'ngStorage';
import 'angular-local-storage';
import 'ui-router-stateHelper';

//Importanto recursos comunes
import {routing} from 'commons';
import futureRoutes from './routes.json!';

let app = angular.module('app', ['ui.router',
    'ui.router.stateHelper',
    'oc.lazyLoad',
    'ngMaterial',
    'ngStorage',
    'LocalStorageModule']);

/*Config Theme*/
app.config(() => {

});

/**
 * Agregando las rutas del JSON
 */
app.config(routing(app, futureRoutes));

app.config(($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider) => {
    //$locationProvider.html5Mode(true);
    $httpProvider.useApplyAsync(true);
    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

/*@ngInject*/
/*app.run((comLoadingService) => {
 comLoadingService.show();
 });*/

/**
 * La siguiente funcion hace que se ejecute la aplicacion
 */
angular.element(document).ready(function () {
    angular.bootstrap(document.body, [app.name], {
        // strictDi: true
    });
});

export default app;
