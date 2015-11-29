import securityModule from '../../securityModule';

class SecurityController {

    /*ngInject*/
    constructor($state, $window, $location, AuthenticationService, SecurityService, LoadMask) {
        this.loadMask = LoadMask;
        this.loadMask.create('loadMaskData', "Espere por favor, autenticando ...", 'body');
        this.authentication = AuthenticationService;
        this.security = SecurityService;
        this.$state = $state;
        this.$window = $window;

        // If user is signed in then redirect back home
        var credentials = this.authentication.getCredentials();
        if (credentials && credentials.user) {
            $location.path('/');
            //$state.transitionTo('main');
        }
    }

    signup(isValid) {
        this.error = null;
        if (!isValid) {
            return false;
        }
        this.security.signup(this.credentials)
            .then((response) => {
                this.authentication.getCredentials().user = response;
                // And redirect to the previous or home page
                //this.$state.go(this.$state.previous.state.name || 'main', this.$state.previous.params);
                this.$state.transitionTo('main');
            })
            .catch((error) => {
                this.error = error.message;
            });
    }

    signin(isValid) {
        this.error = null;
        if (!isValid) {
            return false;
        }
        //Show loading
        this.loadMask.show('#loadMaskData');
        this.security.signin(this.credentials)
            .then((response) => {
                this.authentication.getCredentials().user = response;

                this.loadMask.hide('#loadMaskData');
                // And redirect to the previous or home page
                //this.$state.go(this.$state.previous.state.name || 'home', this.$state.previous.params);
                this.$state.transitionTo('main');
            })
            .catch((error) => {
                console.log("error", error);
                this.loadMask.hide('#loadMaskData');
                this.error = error.message;
            });
    }

    callOauthProvider() {
        let url = '';
        if (this.$state.previous && this.$state.previous.href) {
            url += '?redirect_to=' + encodeURIComponent(this.$state.previous.href);
        }

        // Effectively call OAuth authentication route:
        if (url) {
            this.$window.location.href = url;
        }
    }

}

securityModule.controller('SecurityController', SecurityController);

export default securityModule;
