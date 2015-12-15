import securityModule from '../../securityModule';

class PasswordController {

    /*ngInject*/
    constructor($state, $window, $stateParams, $location, AuthenticationService, SecurityService) {
        this.authentication = AuthenticationService;
        this.security = SecurityService;
        this.$state = $state;
        this.$window = $window;
        this.$stateParams = $stateParams;

        // If user is signed in then redirect back home
        if (this.authentication.user) {
            $location.path('/');
            //$state.transitionTo('main');
        }

    }

    askForPasswordReset(isValid) {
        this.success = this.error = null;
        if (!isValid) {
            return false;
        }
        this.security.askForPasswordReset(this.credentials)
            .then((response) => {
                this.credentials = null;
                this.success = response.message;
            })
            .catch(function (error) {
                // Show user error message and clear form
                this.credentials = null;
                this.error = error.message;
            });
    }

    resetUserPassword(isValid) {
        this.success = this.error = null;
        if (!isValid) {
            return false;
        }
        this.security.resetUserPassword(this.passwordDetails, '/api/auth/reset/' + this.$stateParams.token)
            .then((response) => {
                this.passwordDetails = null;

                // Attach user profile
                this.authentication.user = response;
                // And redirect to the index page
                this.$location.path('/password/reset/success');
            })
            .catch(function (response) {
                this.error = response.message;
            });
    }

}

securityModule.controller('PasswordController', PasswordController);

export default securityModule;
