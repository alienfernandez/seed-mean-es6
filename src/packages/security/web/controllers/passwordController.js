import securityModule from '../../securityModule';

class PasswordController {

    /*ngInject*/
    constructor($state, $http, $stateParams, $location, AuthenticationService, SecurityService, toastr) {
        this.authentication = AuthenticationService;
        this.security = SecurityService;
        this.$state = $state;
        this.$http = $http;
        this.$stateParams = $stateParams;
        this.toastr = toastr;

        // If user is signed in then redirect back home
        if (!this.authentication.user) {
            $location.path('/');
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
            .catch((response) => {
                this.error = response.message;
            });
    }

    // Change user password
    changeUserPassword() {
        this.$http.post('/api/users/password', this.passwordDetails).success(
            (response) => {
                console.log("response", response)
                // If successful show success message and clear form
                this.passwordDetails = null;
                this.toastr.success("Su clave fue cambiada correctamente.", 'Info');
            }).error((response) => {
                this.error = response.message;
                this.toastr.error(this.error, 'Error');
            });
    }

;

}

securityModule.controller('PasswordController', PasswordController);

export default securityModule;
