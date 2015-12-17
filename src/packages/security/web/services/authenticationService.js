import securityModule from '../../securityModule';

class AuthenticationService {

    constructor($window, localStorageService) {
        let user = null;
        if ($window && $window.user) {
            user = $window.user;
        } else if (localStorageService && localStorageService.get('user')) {
            user = localStorageService.get('user');
        }
        return {
            user: user
        };
    }

    /*ngInject*/
    static instance($window, localStorageService) {
        return new AuthenticationService($window, localStorageService);
    }
}

securityModule.service('AuthenticationService', AuthenticationService.instance);

export default securityModule;
