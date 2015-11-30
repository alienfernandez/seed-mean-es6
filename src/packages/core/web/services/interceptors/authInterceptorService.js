import coreModule from '../../coreModule';

class AuthInterceptorService {

    /*ngInject*/
    constructor($q, $injector) {
        this.$q = $q;
        this.$injector = $injector;
    }

    responseError(rejection) {
        if (!rejection.config.ignoreAuthModule) {
            switch (rejection.status) {
                case 401:
                    this.$injector.get('$state').transitionTo('authentication.signin');
                    break;
                case 403:
                    this.$injector.get('$state').transitionTo('forbidden');
                    break;
            }
        }
        // otherwise, default behaviour
        return $q.reject(rejection);
    }
}

coreModule.factory('AuthInterceptor', AuthInterceptorService);

export default coreModule;
