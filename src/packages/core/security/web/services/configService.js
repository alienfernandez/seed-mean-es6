import securityModule from '../../securityModule';
import debug from 'debug';

class ConfigService {

  /*ngInject*/
  constructor(mainBaseService) {
    this._mainBaseService = mainBaseService;
    this._log = debug(`cor:${this.constructor.name}`);
  }

  getConfigHost() {
    return new Promise((resolve, reject) => {
      this._mainBaseService.get('configHost.json',{})
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          error.men = "notFouSer";
          this._log(error.men);
          reject(error);
        });
    });
  }
}

securityModule.service('mainConfigService', ConfigService);

export default securityModule;
