import commonModule from '../commonModule';
import {HttpService} from '../lib';

class BaseHttpService extends HttpService {
    /*ngInject*/
    constructor($http, lodash, $appConstants, localStorageService) {
        console.log("$appConstants!", $appConstants);
        super($http, lodash);
        this.config = {
            serverUri: $appConstants.server + ':' + $appConstants.port
        }
    }
}

commonModule.service('BaseHttpService', BaseHttpService);

export default commonModule;
