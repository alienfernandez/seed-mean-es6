import securityModule from '../../securityModule';

class SecurityService {

    constructor($window, BaseHttpService) {
        this.$window = $window;
        this.http = BaseHttpService;
        this.serverUri = this.http.config.serverUri;
        console.log("serverUri: ", this.serverUri);
    }

    /*ngInject*/
    static instance($window, BaseHttpService) {
        return new SecurityService($window, BaseHttpService);
    }

    /**
     * Get user data
     * @param credentials
     * @param uri
     * @returns {Promise}
     */
    signup(credentials, uri = '/api/auth/signup') {
        var url = this.serverUri + uri;
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
        var url = this.serverUri + uri;
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
        var url = this.serverUri + '/api/auth/signout';
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
        var url = this.serverUri + uri;
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
        var url = this.serverUri + uri;
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
