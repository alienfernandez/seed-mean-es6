import systemModule from './systemModule';

//Import css
import './web/assets/css/core.min.css!';

//Services
import './web/services/interceptors/authInterceptorService';
import './web/services/socketIoService';
import './web/services/systemService';

//Controllers
import './web/controllers/homeController';
import './web/controllers/componentsController';
import './web/controllers/controlPanelController';
import './web/controllers/systemController';
import './web/controllers/adminController';

//Directives
import './web/directives/headerDirective';
import './web/directives/contentDirective';

export default systemModule;
