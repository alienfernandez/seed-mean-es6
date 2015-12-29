import systemModule from './systemModule';

//Import css
import './web/assets/css/core.min.css!';

//Services
import './web/services/interceptors/authInterceptorService';
import './web/services/socketIoService';

//Controllers
import './web/controllers/homeController';
import './web/controllers/componentsController';
import './web/controllers/controlPanelController';

//Directives
import './web/directives/headerDirective';
import './web/directives/contentDirective';

export default systemModule;
