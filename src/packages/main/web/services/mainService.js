import mainModule from '../../mainModule';

class MainService {

    /*ngInject*/
    constructor(HttpService) {
        this.http = HttpService;
    }

    getListEmployee() {
        var url = "http://localhost:8080/ws/service";

        return new Promise((resolve, reject) => {
            this.http.jsonp(url)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

mainModule.service('mainService', MainService);

export default mainModule;
