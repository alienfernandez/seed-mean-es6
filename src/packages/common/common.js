//Import resources
import commonModule from './commonModule';

//Constants
import './constants/responseTypeConstant';
import './constants/appConstant.development';

//provider
import './providers/lagoProvider';

//Import factories
import './components/util/index';

//Directives
import './components/flash/index';
import './components/validation/index';
import './components/mask/index';
import './components/data-view/index';

import routing from './providers/routing';

export {routing, commonModule};
