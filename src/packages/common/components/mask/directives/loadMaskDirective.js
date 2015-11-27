import commonModule from '../../../commonModule';

/**
 * @ngdoc directive
 * @name loadMask
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive load mask application
 *
 */
class LoadMaskDirective {
    constructor() {
        let directive = {
            restrict: 'E',
            replace: true,
            template: '<div data-role="loadMask" class="load-mask">' +
            '<div class="load-mask-panel"><div class="loading-wrapper"><span class="loading-center">' +
            '       <i class="fa fa-spinner fa-pulse"></i> <span data-role="message"></span></span>' +
            '   </div>' +
            '</div></div>',
            link: this.link
        };

        return directive;
    }

    link($scope, element, $attrs, ngModel, transclude) {
        var elRender = ($attrs.el) ? $attrs.el : 'body';
        var message = ($attrs.message) ? $attrs.message : 'Espere por favor...';
        if ($attrs.id) {
            element.find('div[data-role="loadMask"]').attr('id', $attrs.id);
        }
        element.find('span[data-role="message"]').html(message);
        element.prependTo(elRender);
    }
}

commonModule.directive('loadMask', () => new LoadMaskDirective());

export default commonModule;
