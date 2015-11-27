import commonModule from '../../../commonModule';

/**
 * @ngdoc directive
 * @name dataView
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive data view
 *
 */
class DataViewDirective {
    constructor() {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: DataViewController,
            template: '<div data-role="dataView">' +
            '</div>',
            link: this.link
        };

        return directive;
    }

    link($scope, element, $attrs, ngModel, transclude) {

    }
}

commonModule.directive('dataView', () => new DataViewDirective());

export default commonModule;
