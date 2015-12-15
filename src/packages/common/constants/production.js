import commonModule from '../commonModule';
import Constant from '../components/core/Constant';

var prodConstants = {
    app: {
        title: 'MEANRR.ES6',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, Node.js, React.js and Redis',
        keywords: 'MongoDB, Express, AngularJS, Node.js, React.js, Redis'
    },
    port: 443,
    server: 'https://localhost',
    secure: {
        ssl: true,
        privateKey: './config/sslcerts/key.pem',
        certificate: './config/sslcerts/cert.pem'
    },
    local_store: {
        prefix: 'app_storage',
        type: {
            local_storage: 'localStorage',
            session_storage: 'sessionStorage'
        }
    }
}

const appProdConstant = new Constant(prodConstants);

commonModule.constant('$appConstants', appProdConstant);
//commonModule.value('prodConstants', prodConstants);

export default commonModule;
