import securityModule from '../../securityModule';

class ProfileController {

    /*ngInject*/
    constructor($location, AuthenticationService, UserService) {
        this.authentication = AuthenticationService;
        this.UserService = UserService;

        // If user is signed in then redirect back home
        if (this.authentication.user) {
            $location.path('/');
        }
    }

    /**
     * Update a user profile
     */
    updateUserProfile() {
        var user = new this.UserService(this.authentication.user);
        user.$update(function (response) {
            this.success = true;
            this.authentication.user = response;
        }, function (response) {
            $scope.error = response.data.message;
        });
    }

}

securityModule.controller('ProfileController', ProfileController);

export default securityModule;
