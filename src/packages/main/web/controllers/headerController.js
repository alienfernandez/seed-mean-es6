import mainModule from '../../mainModule';

class HeaderController {

    /*ngInject*/
    constructor($state, $stateParams) {
        this.$state = $state;
        this.$stateParams = $stateParams;
    }

}

mainModule.controller('headerController', HeaderController);

export default mainModule;
