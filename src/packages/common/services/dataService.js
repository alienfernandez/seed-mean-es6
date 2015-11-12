import commonModule from '../commonModule';

class DataService {

  /*@ngInject*/
  constructor() {
    this._data = [];
  }
  
  get data () {
    return this._data;
  };
  
  set data (data) {
    this._data = data;
  };
  
}

commonModule.service('dataService', DataService);

export default commonModule;
