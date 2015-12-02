import angular from 'angular';

//import {commonModule} from 'commons';


let coreModule = angular.module("core", [
]);

coreModule.run(() => {
    console.log("test run core Module");
})


export default coreModule;
