import commonModule from '../../../commonModule';

/**
 * @ngdoc controller
 * @name TreePanelController
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive data view
 *
 */
class TreePanelController {

    /*ngInject*/
    constructor(lodash) {
        this._ = lodash;
    }
}

commonModule.controller('TreePanelController', TreePanelController);

export default commonModule;
