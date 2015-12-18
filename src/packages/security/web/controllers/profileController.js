import securityModule from '../../securityModule';

class ProfileController {

    /*ngInject*/
    constructor($location, $state, AuthenticationService, UserService, Upload, toastr) {
        this.authentication = AuthenticationService;
        this.UserService = UserService;
        this.Upload = Upload;
        this.user = this.authentication.user;
        this.imageURL = this.user.profileImageURL;
        this.$state = $state;
        this.toastr = toastr;
        // If user is signed in then redirect back home
        if (!this.authentication.user) {
            $location.path('/');
        }
    }

    /**
     * Update a user profile
     */
    updateUserProfile() {
        let user = new this.UserService(this.authentication.user);
        user.$update((response) => {
            this.user = response;
        }, (response) => {
            this.error = response.data.message;
        });
    }

    /**
     * Change user profile picture
     */
    uploadProfilePicture(file) {
        // Start upload
        this.Upload.upload({
            url: 'api/users/picture',
            data: {
                file: file,
                user: this.authentication.user
            }
        }).then((response) => {
            console.log("response", response)
            this.authentication.user = response.data;
            this.imageURL = response.data.profileImageURL;
            //Reload state
            this.$state.reload();
            this.toastr.success('Success ' + response.config.data.file.name + ' uploaded.', 'Success');
        }, (resp) => {
            console.log('Error status: ' + resp.status);
            this.toastr.error('Error status: ' + resp.status, 'Error');
        }, (evt) => {
            //let progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }

}

securityModule.controller('ProfileController', ProfileController);

export default securityModule;
