import securityModule from '../../securityModule';
import debug from 'debug';

class AuthenticationService {

    /*ngInject*/
    constructor($window) {
        this.$window = $window;
    }

    getCredentials() {
        this.auth = {
            user: this.$window.user
        };
        return this.auth;
    }

    setCredentials(credentials) {
        this.auth = credentials;
    }

    static instance() {
        return new AuthenticationService();
    }
}

securityModule.service('AuthenticationService', AuthenticationService.instance);

export default securityModule;
