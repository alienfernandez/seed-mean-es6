import coreModule from '../../coreModule';

import HeaderView from '../react-components/headerReact';

/**
 * @ngdoc directive
 * @name header
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive header
 *
 */
class HeaderDirective {

    constructor() {
        let directive = {
            restrict: 'E',
            replace: true,
            //template: '<div></div>',
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //Render component
                React.render(
                    React.createElement(HeaderView, {}),
                    $element[0]
                );
            }
        };

        return directive;
    }
}

coreModule.directive('header', () => new HeaderDirective());

export default coreModule;
