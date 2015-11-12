import angular from 'angular';
import commonModule from '../../../commonModule';

class AlertMessageController {

  /*ngInject*/
  constructor(comAlertMessageFactory) {
    this._comAleMesFac = comAlertMessageFactory;
    this.ms = "a";
  }

  get comAleMesFac() {
    return this._comAleMesFac;
  }

  close() {
    this._comAleMesFac.close();
  }
}

commonModule.controller('flash', AlertMessageController);

export default commonModule;
