import commonModule from '../../../commonModule';

//Import template
import AppPanelTpl from '../views/app-panel-view.tpl';

/**
 * @ngdoc directive
 * @name navbar
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive navbar
 *
 */
class AppPanelDirective {

    constructor() {
        let directive = {
            restrict: 'E',
            //replace: true,
            templateUrl: AppPanelTpl.name,
            controller: 'AppPanelController',
            controllerAs: 'appPanelCtrl',
            scope: {
                //options: '='
            },
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //Render component
            }
        };
        return directive;
    }
}

commonModule.directive('appPanel', () => new AppPanelDirective());

export default commonModule;
