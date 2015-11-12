import angular from 'angular';
import debug from 'debug';

import {commonModule} from 'commons';

let securityModule = angular.module('app.main', [])
    .config(($stateProvider) => {

    });

securityModule.run(() => {

});

export default securityModule;
