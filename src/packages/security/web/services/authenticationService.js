import securityModule from '../../securityModule';

class AuthenticationService {

    constructor($window, localStorageService) {
        this.localStorageService = localStorageService;
        this.$window = $window;
        this._user = null;
        if ($window && $window.user) {
            this._user = $window.user;
        } else if (localStorageService && localStorageService.get('user')) {
            this._user = localStorageService.get('user');
        }
    }

    get user() {
        return this._user;
    }

    set user(pUser) {
        this._user = pUser;
        this.localStorageService.set('user', pUser);
        this.$window.user = pUser;
    }

    /*ngInject*/
    static instance($window, localStorageService) {
        return new AuthenticationService($window, localStorageService);
    }
}

securityModule.service('AuthenticationService', AuthenticationService.instance);

export default securityModule;
