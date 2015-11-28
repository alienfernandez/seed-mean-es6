import mainModule from '../../mainModule';

class ConfigFactory {
    constructor() {

    }

    /*ngInject*/
    static instance() {
        return new ConfigFactory();
    }
}

mainModule.factory('configFactory', ConfigFactory.instance);

export default ConfigFactory;
