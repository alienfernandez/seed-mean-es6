import securityModule from './securityModule';

//Constant
//import './../common/constants/appConstant';

//Services
import './web/services/securityBaseService';
import './web/services/authenticationService';
import './web/services/securityService';
import './web/services/userService';

//Controllers
import './web/controllers/securityController';
import './web/controllers/passwordController';
import './web/controllers/userController';

export default securityModule;
