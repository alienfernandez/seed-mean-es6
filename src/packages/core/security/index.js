import securityModule from './securityModule';

//Import styles
import './web/assets/css/users.min.css!';

//Services
import './web/services/authenticationService';
import './web/services/securityService';
import './web/services/userService';
//import './web/services/usersService';

//Controllers
import './web/controllers/securityController';
import './web/controllers/passwordController';
import './web/controllers/userController';
import './web/controllers/profileController';
import './web/controllers/socialAccountController';

export default securityModule;
