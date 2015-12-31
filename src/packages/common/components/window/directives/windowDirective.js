import commonModule from '../../../commonModule';

import 'jquery-ui';

/**
 * @ngdoc directive
 * @name treeView
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive tree view
 *
 */
class WindowDirective {

    constructor() {
        let template = `
          <div id="{{winCtrl.id}}" title="{{winCtrl.title}}" class="" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{winCtrl.title}}</h4>
              </div>
              <div class="modal-body" data-role="transclude">
                <!--<p>One fine body&hellip;</p>-->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
          </div>
        `;

        let directive = {
            restrict: 'E',
            //replace: true,
            controller: "WindowController",
            template: template,
            transclude: true,
            controllerAs: 'winCtrl',
            bindToController: true,
            scope: {
                id: '=',
                title: '=',
                //options: '=',
                //buttons: '='
            },
            link: (scope, $element, $attrs, ngModel, transclude) => {
                console.log("scope", scope)
                scope.winCtrl.id = ($attrs.id) ? $attrs.id : 'idWindow';
                scope.winCtrl.title = ($attrs.title) ? $attrs.title : 'Title';
                //Append data inside directive (TRANSCLUDE)
                transclude(function (clone) {
                    $element.find('div[data-role="transclude"]').append(clone);
                });
                $element.find('#' + scope.winCtrl.id).dialog();
                //$element.find('div#' + scope.id).draggable();
                if (scope.buttons) {

                }
            }
        };

        return directive;
    }
}

commonModule.directive('window', () => new WindowDirective());

export default commonModule;
