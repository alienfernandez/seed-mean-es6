import mainModule from '../../mainModule';
import debug from 'debug';

class ConfigService {

  /*ngInject*/
  constructor() {
    this._log = debug(`cor:${this.constructor.name}`);
  }

  getConfigHost() {
    //return new Promise((resolve, reject) => {
    //  this._mainBaseService.get('configHost.json',{})
    //    .then(res => {
    //      resolve(res);
    //    })
    //    .catch(error => {
    //      error.men = "notFouSer";
    //      this._log(error.men);
    //      reject(error);
    //    });
    //});
  }
}

mainModule.service('mainConfigService', ConfigService);

export default mainModule;
