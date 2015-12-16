import coreModule from '../../coreModule';

class HomeController {

    /*ngInject*/
    constructor(AuthenticationService, $appConstants) {
        console.log("$appConstants!", $appConstants)
        // This provides Authentication context.
        this.authentication = AuthenticationService;
    }

}

coreModule.controller('HomeController', HomeController);

export default coreModule;