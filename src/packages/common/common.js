//Importando recursos del modulo
import commonModule from './commonModule';

//provider
import './providers/lagoProvider';

//Services
import './services/loadingService';

//Directives
import './components/flash/index';
import './components/validation/index';

//Constants
import './constants/mimeTypeConstant';
import './constants/responseTypeConstant';
import './constants/appConstant.development';
//import './constants/appConstant';

import routing from './providers/routing';
import './services/dataService';

export {routing, commonModule};
