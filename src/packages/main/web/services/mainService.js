import mainModule from '../../mainModule';
import debug from 'debug';

class MainService {

    /*ngInject*/
    constructor() {
        this._log = debug(`cor:${this.constructor.name}`);
    }

    getListEmployee() {
        var url = "http://localhost:8080/ws/service";

        return new Promise((resolve, reject) => {
            this._mainBaseService.jsonp(url)
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
