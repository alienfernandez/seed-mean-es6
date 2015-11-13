import coreModule from '../../coreModule';
import '../services/configService';
import debug from 'debug';

class ConfigFactory {
    constructor($appConstants) {
        this._$appConstants = $appConstants;
    }

    /*ngInject*/
    static instance($appConstants, corConService) {
        return new ConfigFactory($appConstants, corConService);
    }
}

coreModule.factory('configFactory', ConfigFactory.instance);

export default ConfigFactory;
