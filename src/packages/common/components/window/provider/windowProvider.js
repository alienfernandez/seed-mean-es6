import commonModule from '../../../commonModule';

/**
 * @ngdoc provider
 * @name Window
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Provider window
 *
 */
class WindowProvider {

    constructor() {

    }

    setDefaultAppendEl(el) {
        this.defaultAppendEl = el;
    }

    /*ngInject*/
    $get($document, $rootScope, $compile) {

        return {
            show: (selector) => {
                if (angular.element(selector)) {
                    angular.element(selector).show();
                }
            },
            hide: (selector) => {
                if (angular.element(selector)) {
                    angular.element(selector).hide();
                }
            },
            create: (id, title, appendEl) => {
                appendEl = appendEl || this.defaultAppendEl;
                var selector = "#" + id;
                var injector = angular.injector(['ng']),
                    template = angular.element('<window id="' + id + '" title="' + title + '" el="' + appendEl + '"></window>');
                var windowExist = $document.find(selector);
                //Check exist mask in DOM
                if (!windowExist.length) {
                    let compileTpl = $compile(template)($rootScope)
                    $document.find(appendEl).prepend(compileTpl);
                }
            }
        };
    }
}

commonModule.provider('WindowService', WindowProvider);

export default commonModule;
