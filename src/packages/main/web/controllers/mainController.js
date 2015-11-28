import mainModule from '../../mainModule';

class MainController {

    /*ngInject*/
    constructor($state) {
        $state.transitionTo('main.layout');
    }


}

mainModule.controller('mainController', MainController);

export default mainModule;
