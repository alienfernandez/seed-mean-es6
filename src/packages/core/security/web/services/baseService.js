import securityModule from '../../securityModule';
import {HttpService} from 'packages/common/lib';

class BaseService extends HttpService {
  /*ngInject*/
  constructor($http, lodash, responseTypeConstant, $appConstants) {
    super($http, lodash, responseTypeConstant);
    this._config = $appConstants.REMOTE_HOST;
  }
}

securityModule.service('mainBaseService', BaseService);

export default securityModule;
