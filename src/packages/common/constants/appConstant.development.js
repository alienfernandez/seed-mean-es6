import commonModule from '../commonModule';
import Constant from '../lib/core/Constant';
//import config from '../../../../config/config';
//console.log("config", config)

var constants = {
    DB: {
        CONFIG: {
            NAME: 'config'
        }
    },
    ID_HOST: 'localhost',
    REMOTE_HOST: {
        server: 'localhost',
        port: 8001,
        context: 'json'
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
