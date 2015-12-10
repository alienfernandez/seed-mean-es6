import commonModule from '../commonModule';
import Constant from '../components/core/Constant';

var devConstants = {
    app: {
        title: 'MEANRR.ES6',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, Node.js and React.js',
        keywords: 'MongoDB, Express, AngularJS, Node.js, React.js'
    },
    port: 8001,
    server: 'http://localhost',
    local_store: {
        prefix: 'app_storage',
        type: {
            local_storage: 'localStorage',
            session_storage: 'sessionStorage'
        }
    }
}

const appDevConstant = new Constant(devConstants);
commonModule.constant('$appConstants', appDevConstant);

export default commonModule;
