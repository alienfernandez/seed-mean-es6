import securityModule from '../../securityModule';

class SecurityController {

    /*ngInject*/
    constructor($state, $window, $location, AuthenticationService, SecurityService, LoadMask, toastr) {
        this.loadMask = LoadMask;
        this.loadMask.create('loadMaskData', "Espere por favor, autenticando ...", 'body');
        this.authentication = AuthenticationService;
        this.security = SecurityService;
        this.$state = $state;
        this.$window = $window;
        this.toastr = toastr;

        // If user is signed in then redirect back home
        var credentials = this.authentication;
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
                this.authentication.user = response;
                // And redirect to the previous or home page
                this.$state.transitionTo(this.$state.previous.state.name || 'home', this.$state.previous.params);
                //this.$state.transitionTo('home');
            })
            .catch((error) => {
                this.error = error.message;
                this.toastr.error(error.message.message, 'Error');
            });
    }

    signout() {
        this.security.signout().then((response) => {
            this.authentication.user = null;
        });
    }

    signin(isValid) {
        this.error = null;
        if (!isValid) {
            return false;
        }
        //Show loading
        this.loadMask.show('#loadMaskData');
        this.security.signin(this.credentials).then((response) => {
            this.authentication.user = response;

            this.loadMask.hide('#loadMaskData');
            // And redirect to the previous or home page
            this.$state.transitionTo(this.$state.previous.state.name || 'home', this.$state.previous.params);
        }).catch((error) => {
            this.loadMask.hide('#loadMaskData');
            this.toastr.error(error.message.message, 'Error');
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