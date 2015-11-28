import commonModule from '../../../commonModule';

import DataView from '../react-components/dataViewReact';

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
        //let templateDataView = `
        //  <div class="dv-thumb-wrap dv-item-selected dv-view-item-focused" role="option" tabindex="-1" >
        //    <div class="thumb">
        //        <img src="icons/kiva.png">
        //    </div>
        //    <span>Kiva app</span>
        //  </div>
        //`;

        let directive = {
            restrict: 'E',
            replace: true,
            //controller: DataViewController,
            template: '<div data-role="transclude" class="dv-main">' +
            '<span id="testt" data-role="test"></span>' +
            '</div>',
            scope: {
                options: '='
            },
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //console.log("$scope", $scope);
                //Render component with options
                React.render(
                    React.createElement(DataView, $scope.options), $element.find('#testt')[0]
                );
            }
        };

        return directive;
    }
}

commonModule.directive('dataview', () => new DataViewDirective());

export default commonModule;
