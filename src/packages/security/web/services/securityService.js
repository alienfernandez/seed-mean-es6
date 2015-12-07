import securityModule from '../../securityModule';

class SecurityService {

    /*ngInject*/
    constructor($window, SecurityBaseService, $appConstants) {
        this.$window = $window;
        this.http = SecurityBaseService;
        this.serverUrlBase = 'http://localhost:8001';
    }

    static instance($window, SecurityBaseService) {
        return new SecurityService($window, SecurityBaseService);
    }

    /**
     * Get user data
     * @param credentials
     * @param uri
     * @returns {Promise}
     */
    signup(credentials, uri = '/api/auth/signup') {
        var url = this.serverUrlBase + uri;
        return new Promise((resolve, reject) => {
            this.http.post(url, credentials)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * Sign in
     * @param credentials
     * @param uri
     * @returns {Promise}
     */
    signin(credentials, uri = '/api/auth/signin') {
        var url = this.serverUrlBase + uri;
        return new Promise((resolve, reject) => {
            this.http.post(url, credentials)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    signout() {
        var url = this.serverUrlBase + '/api/auth/signout';
        return new Promise((resolve, reject) => {
            this.http.post(url, {})
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    askForPasswordReset(credentials, uri = '/api/auth/forgot') {
        var url = this.serverUrlBase + uri;
        return new Promise((resolve, reject) => {
            this.http.post(url, credentials)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * Reset user password
     * @param passwordDetails
     * @param uri
     * @returns {Promise}
     */
    resetUserPassword(passwordDetails, uri) {
        var url = this.serverUrlBase + uri;
        return new Promise((resolve, reject) => {
            this.http.post(url, passwordDetails)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

securityModule.service('SecurityService', SecurityService.instance);

export default securityModule;
