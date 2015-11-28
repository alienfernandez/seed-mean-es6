import securityModule from '../../securityModule';
import {HttpService} from 'packages/common/lib';

class SecurityBaseService extends HttpService {
  /*ngInject*/
  constructor($http, lodash) {
    super($http, lodash);
  }
}

securityModule.service('SecurityBaseService', SecurityBaseService);

export default securityModule;
