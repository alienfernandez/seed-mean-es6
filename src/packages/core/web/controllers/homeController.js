import coreModule from '../../coreModule';

class HomeController {

    /*ngInject*/
    constructor(AuthenticationService) {
        // This provides Authentication context.
        this.authentication = AuthenticationService;
        this.user = AuthenticationService.user;
        this.options = {
            user: this.user
        };
    }
}

coreModule.controller('HomeController', HomeController);

export default coreModule;
