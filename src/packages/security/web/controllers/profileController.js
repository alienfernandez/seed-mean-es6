import securityModule from '../../securityModule';

class ProfileController {

    /*ngInject*/
    constructor($location, AuthenticationService, UserService, Upload) {
        this.authentication = AuthenticationService;
        this.UserService = UserService;
        this.Upload = Upload;
        this.user = this.authentication.user;
        this.imageURL = this.user.profileImageURL;
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

    /**
     * Change user profile picture
     */
    uploadProfilePicture() {
        // Start upload
        this.Upload.upload({
            url: 'api/users/picture',
            data: {
                file: file,
                user: this.authentication.user
            }
        }).then((resp) => {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, (resp) => {
            console.log('Error status: ' + resp.status);
        }, (evt) => {
            let progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }

}

securityModule.controller('ProfileController', ProfileController);

export default securityModule;
