//Import resources
import commonModule from './commonModule';

//Constants
import './constants/development';
//import './constants/production';

//provider
import './providers/lagoProvider';

//Import factories
import './components/util/index';

//Import services
import './components/http-util/services/baseHttpService';

//Import components
import './components/validation/index';
import './components/mask/index';
import './components/data-view/index';
import './components/navbar/index';
import './components/tree-panel/index';
import './components/window/index';

import routing from './providers/routing';

export {routing, commonModule};
