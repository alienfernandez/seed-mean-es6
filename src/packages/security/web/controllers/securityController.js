import securityModule from '../../securityModule';

class SecurityController {

    /*ngInject*/
    constructor($state, $window, $location, AuthenticationService, SecurityService, LoadMask) {
        this.LoadMask = LoadMask;
        console.log("this.LoadMask", this.LoadMask)
        this.LoadMask.create('loadMaskData', "Espere por favor, cargando ...", 'body');
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
        console.log("this.credentials", this.credentials)
        this.security.signup(this.credentials)
            .then((response) => {
                this.authentication.getCredentials().user = response;

                // And redirect to the previous or home page
                this.$state.go($state.previous.state.name || 'home', $state.previous.params);
            })
            .catch(function (error) {
                this.error = error.message;
            });
    }

    signin(isValid) {
        this.LoadMask.show('#loadMaskData');
        this.error = null;
        if (!isValid) {
            return false;
        }
        this.security.signin(this.credentials)
            .then((response) => {
                this.authentication.getCredentials().user = response;

                // And redirect to the previous or home page
                this.$state.go(this.$state.previous.state.name || 'home', this.$state.previous.params);
            })
            .catch((error) => {
                console.log("error", error);
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
