//Import resources
import commonModule from './commonModule';

//service
import './services/interceptors/authInterceptorService';

//controllers
import './controllers/homeController';

//provider
import './providers/lagoProvider';

//Import factories
import './components/util/index';

//Directives
import './components/flash/index';
import './components/validation/index';
import './components/mask/index';
import './components/data-view/index';

//Constants
import './constants/responseTypeConstant';
import './constants/appConstant.development';

import routing from './providers/routing';

export {routing, commonModule};
