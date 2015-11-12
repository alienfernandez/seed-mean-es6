import commonModule from '../commonModule';
import Constant from '../lib/core/Constant';

var constants = {
    DB: {
        CONFIG: {
            NAME: 'config'
        }
    },
    ID_HOST: 'localhost',
    REMOTE_HOST: {
        server: 'localhost',
        port: 9001,
        context: 'json'
    },
    WEBSERVICE_HOST: {
        server: 'localhost',
        port: 9001
    },
    LOCAL_STORE: {
        PREFIX: 'app_storage',
        TYPE: {
            LOCAL_STORAGE: 'localStorage',
            SESSION_STORAGE: 'sessionStorage'
        }
    }
}

const appConstant = new Constant(constants);

commonModule.constant('$appConstants', appConstant);

export default commonModule;
