import commonModule from '../../../commonModule';

//import NavBarView from '../react-components/navbarReact';

//Import template
import NavBarTpl from '../views/navbar-view.tpl';

/**
 * @ngdoc directive
 * @name navbar
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive navbar
 *
 */
class NavBarDirective {

    constructor() {
        let directive = {
            restrict: 'E',
            //replace: true,
            templateUrl: NavBarTpl.name,
            controller: 'NavbarController',
            controllerAs: 'navbarCtrl',
            scope: {
                user: '='
            },
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //Render component
            }
        };
        return directive;
    }
}

commonModule.directive('navbar', () => new NavBarDirective());

export default commonModule;
