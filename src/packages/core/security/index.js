import securityModule from './securityModule';

/**
 * Server files
 */
import './server/config/security.server.config';
import './server/models/security.server.model';
import './server/controllers/security.server.controller';
import './server/policies/security.server.policy';
import './server/routes/security.server.routes';

/**
 * Client files
 */
//Constant
//import './../common/constants/appConstant';

//Services
import './web/services/baseService';
import './web/services/mainService';

//Factories
import './web/factories/configFactory';

//Controllers
import './web/controllers/securityController';

export default securityModule;
