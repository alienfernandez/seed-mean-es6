import mainModule from '../../mainModule';

class HeaderController {

    /*ngInject*/
    constructor($state, dataService, $stateParams) {
        this.status = "";
        this.$state = $state;
        this.dataService = dataService;
        this.$stateParams = $stateParams;
    }

}

mainModule.controller('headerController', HeaderController);

export default mainModule;
