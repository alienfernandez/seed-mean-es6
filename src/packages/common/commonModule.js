import angular from 'angular';
import Constant from './lib/core/Constant';
//Import lodash
import 'ng-lodash';

/**
 * Module common
 */
let commonModule = angular.module('common', ['ngLodash']);

commonModule.config((localStorageServiceProvider, $appConstants) => {
    //Updating prefix and storage type of localStorage
    localStorageServiceProvider
        .setPrefix($appConstants.local_store.prefix)
        .setStorageType($appConstants.local_store.type.session_storage);
});


commonModule.run(($http, localStorageService, $appConstants) => {
    //Get enviroment
    $http.get('/api/environment').then((res) => {
        //Storage enviroment
        localStorageService.set('environment', res.data.environment);
        //switch (res.data.environment) {
        //    case 'development':
        //        const appDevConstant = new Constant(devConstants);
        //        commonModule.constant('$appConstants', appDevConstant);
        //        break;
        //    case 'production':
        //        const appProdConstant = new Constant(prodConstants);
        //        commonModule.constant('$appConstants', appProdConstant);
        //        break;
        //    case 'test':
        //        const apptestConstant = new Constant(devConstants);
        //        commonModule.constant('$appConstants', apptestConstant);
        //        break;
        //}
    })
});

export default commonModule;
