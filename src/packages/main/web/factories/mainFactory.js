import mainModule from '../../mainModule';

class MainFactory {

  constructor() {}

  static instance() {
    return new MainFactory();
  }
}

mainModule.factory('mainFactory', MainFactory.instance);

export default mainModule;
