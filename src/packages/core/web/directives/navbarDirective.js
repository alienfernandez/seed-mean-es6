import coreModule from '../../coreModule';

import NavBarView from '../react-components/navbarReact';

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
            replace: true,
            //template: '<div></div>',
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //Render component
                React.render(
                    React.createElement(NavBarView, {}),
                    $element[0]
                );
            }
        };

        return directive;
    }
}

coreModule.directive('navbar', () => new NavBarDirective());

export default coreModule;
