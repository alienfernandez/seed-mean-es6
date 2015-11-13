import angular from 'angular';
import debug from 'debug';

import {commonModule} from 'commons';

let coreModule = angular.module('app.main', [])
    .config(($stateProvider) => {

    });

coreModule.run(() => {

});

export default coreModule;
