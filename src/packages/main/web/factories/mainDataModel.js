import mainModule from '../../mainModule';

class MainDataModel {

  constructor() {
    this._tipDocs = ['CEDULA', 'PASAPORTE', 'RUC'];
    this._tipDocSel = 'CEDULA';
    this._main = {};
  }

  get main() {
    return this._main;
  }

  set main(main) {
    this._main = main;
  }

  get tipDocs() {
    return this._tipDocs;
  }

  get tipDocSel() {
    return this._tipDocSel;
  }

  set tipDocSel(tipDocSel) {
    this._tipDocSel = tipDocSel;
  }

  /*ngInject*/
  static instance() {
    return new MainDataModel();
  }
}

mainModule.factory('mainDataModel', MainDataModel.instance);

export default mainModule;
