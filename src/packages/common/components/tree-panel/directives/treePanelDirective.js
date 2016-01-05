import commonModule from '../../../commonModule';

/**
 * @ngdoc directive
 * @name treeView
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive tree view
 *
 */
class TreePanelViewDirective {

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
            controller: "TreePanelController",
            template: '<div data-role="transclude" class="dv-main">' +
            '</div>',
            scope: {
                options: '='
            },
            link: ($scope, $element, $attrs, ngModel, transclude) => {

            }
        };

        return directive;
    }
}

commonModule.directive('treepanel', () => new TreePanelViewDirective());

export default commonModule;
