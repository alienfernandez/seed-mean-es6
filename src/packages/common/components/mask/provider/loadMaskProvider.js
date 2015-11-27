import commonModule from '../../../commonModule';

class LoadMaskProvider {

    constructor() {

    }

    setDefaultAppendEl(el) {
        this.defaultAppendEl = el;
    }

    /*ngInject*/
    $get($document, $rootScope, lodash, $q, $compile) {
        let _ = lodash;
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
            create: (id, message, appendEl, promises) => {
                console.log('$document', $document)
                appendEl = appendEl || defaultAppendEl;
                var selector = "#" + id;
                var injector = angular.injector(['ng']),
                    //$compile = injector.get('$compile'),
                    template = angular.element('<load-mask id="' + id + '" el="' + appendEl + '" message="' + message + '"></load-mask>');
                var loadMaskExist = $document.find(selector);
                //Check exist mask in DOM
                if (!loadMaskExist.length) {
                    let compileTpl = $compile(template)($rootScope)
                    console.log("$compile", $compile)
                    console.log("compileTpl", compileTpl)


                    $document.find(appendEl).prepend($compile(template)($rootScope));
                }
                //Check finally promise if apply and hide mask
                if (promises) {
                    allExecPromises = promises;
                    allPromises(allExecPromises).finally(function () {
                        hide(selector);
                    });
                }
            },
            setPromises: (promises) => {
                allExecPromises = promises;
            },
            allPromises: (promises) => {
                if (_.isArray(promises)) {
                    return $q.all(promises);
                }
                return promises;
            }
        }

    }

}

commonModule.provider('LoadMask', LoadMaskProvider);

export default commonModule;
