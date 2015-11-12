import commonModule from '../commonModule';
import Constant from '../lib/core/Constant';

const responseTypeConstant = new Constant({
    ERROR: 0,
    WARNING: 1,
    INFO: 2,
    SUCCESS: 3
});

commonModule.constant('responseTypeConstant', responseTypeConstant);

export default commonModule;
