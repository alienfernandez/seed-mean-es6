import coreModule from '../../coreModule';

class HomeController {

    /*ngInject*/
    constructor(AuthenticationService, localStorageService, SecurityService, $state) {
        // This provides Authentication context.
        this.authentication = AuthenticationService;
        this.user = AuthenticationService.user;
        this.security = SecurityService;
        this.localStorageService = localStorageService;
        this.$state = $state;
        this.options = {
            user: this.user
        };
    }

    editProfile() {
        this.$state.transitionTo('settings.profile');
    }

    signout() {
        this.security.signout().then((response) => {
            //Clean user data
            this.authentication.user = null;
            this.localStorageService.set('user', null);
            if (this.$state.current.name === "home") {
                this.$state.reload();
            } else {
                this.$state.transitionTo('home');
            }
        });
    }

}

coreModule.controller('HomeController', HomeController);

export default coreModule;
