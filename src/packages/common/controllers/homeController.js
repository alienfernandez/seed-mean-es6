import commonModule from '../commonModule';

class HomeController {

    /*ngInject*/
    constructor() {
        // This provides Authentication context.
        //this.authentication = AuthenticationService;
    }

}

commonModule.controller('HomeController', HomeController);

export default commonModule;
