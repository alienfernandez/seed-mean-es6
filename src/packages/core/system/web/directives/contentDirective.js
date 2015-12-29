import systemModule from '../../systemModule';

import ContentView from '../react-components/contentReact';

/**
 * @ngdoc directive
 * @name content
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive content
 *
 */
class ContentDirective {

    constructor() {
        let directive = {
            restrict: 'E',
            replace: true,
            //template: '<div></div>',
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //Render component
                React.render(
                    React.createElement(ContentView, {}),
                    $element[0]
                );
            }
        };

        return directive;
    }
}

systemModule.directive('content', () => new ContentDirective());

export default systemModule;
