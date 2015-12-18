import commonModule from '../../../commonModule';

class NavbarController {

    /*ngInject*/
    constructor(AuthenticationService, $state, SecurityService) {
        // This provides Authentication context.
        this.authentication = AuthenticationService;
        this.user = AuthenticationService.user;
        this.security = SecurityService;
        this.$state = $state;
    }

    /**
     * Sign out user
     */
    signout() {
        this.security.signout().then((response) => {
            //Clean user data
            this.authentication.user = null;
            if (this.$state.current.name === "home") {
                this.$state.reload();
            } else {
                this.$state.transitionTo('home');
            }
        });
    }
}

commonModule.controller('NavbarController', NavbarController);

export default commonModule;
