import securityModule from '../../securityModule';

class UserController {

    /*ngInject*/
    constructor($state, $window, $stateParams, $location, AuthenticationService, UserService) {
        this.authentication = AuthenticationService;
        this.userInstance = UserService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.$window = $window;

        this.user = {};
        this.user.roles = "admin";
        this.user.email = "alien@gmail.com";
    }

    find() {
        this.users = this.userInstance.query();
    }

    // Find existing Article
    findOne() {
        this.user = this.userInstance.get({
            userId: this.$stateParams.userId
        });
    }

    edit(user) {
        this.$state.transitionTo('useredit', user);
    }

    remove(user) {
        if (confirm('Are you sure you want to delete this user?')) {
            if (user) {
                user.$remove();

                this.users.splice(this.users.indexOf(user), 1);
            } else {
                this.user.$remove(() => {
                    this.$state.go('userlist');
                });
            }
        }
    }

    create(isValid) {
        this.error = null;
        if (!isValid) {
            return false;
        }
        this.user.provider = "alien";
        var user = new this.userInstance(this.user);
        // Redirect after save
        user.$save((response) => {
            console.log(response);
            this.$state.transitionTo('userlist');
            //this.$location.path('users/list');
        }, function (errorResponse) {
            console.log("errorResponse", errorResponse);
            //this.error = errorResponse.data.message;
        });
    }

    update(isValid) {
        this.error = null;
        if (!isValid) {
            return false;
        }

        this.user.$update(() => {
            this.$state.go('userlist');
        }, (errorResponse) => {
            this.error = errorResponse.data.message;
            console.log("errorResponse", errorResponse);
        });
    }


}

securityModule.controller('UserController', UserController);

export default securityModule;
