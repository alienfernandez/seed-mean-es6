import mainModule from '../../mainModule';
import '../factories/mainDataModel';
import '../factories/mainFactory';

class MainController {

  /*ngInject*/
  constructor(mainDataModel, $state) {
    this._mainDataModel = mainDataModel;
    $state.transitionTo('main.layout');
  }

  get mainModule() {
    return this._mainDataModel;
  }

}

mainModule.controller('mainController', MainController);

export default mainModule;
