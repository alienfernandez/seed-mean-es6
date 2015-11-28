import commonModule from '../../../commonModule';

/**
 * @ngdoc factory
 * @name DataView
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Factory data view
 *
 */
class DataViewFactory {

    constructor() {

    }

    /*ngInject*/
    static instance() {
        return new DataViewFactory();
    }
}

commonModule.factory('DataView', DataViewFactory.instance);

export default commonModule;
