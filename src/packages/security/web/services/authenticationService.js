import securityModule from '../../securityModule';

class AuthenticationService {

    constructor($window) {
        this.$window = $window;
        this.auth = {
            user: (this.$window) ? this.$window.user : null
        };
        return this.auth;
    }

    /*ngInject*/
    static instance($window) {
        return new AuthenticationService($window);
    }
}

securityModule.service('AuthenticationService', AuthenticationService.instance);

export default securityModule;
