import commonModule from '../../../commonModule';

/**
 * @ngdoc controller
 * @name WindowController
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Controller window
 *
 */
class WindowController {

    /*ngInject*/
    constructor(lodash) {
        this._ = lodash;
    }
}

commonModule.controller('WindowController', WindowController);

export default commonModule;
