import coreModule from './coreModule';

//Import css
import './web/assets/css/core.css!';

//Services
import './web/services/interceptors/authInterceptorService';
import './web/services/socketIoService';

//Controllers
import './web/controllers/homeController';

//Directives
import './web/directives/headerDirective';
import './web/directives/contentDirective';

export default coreModule;
