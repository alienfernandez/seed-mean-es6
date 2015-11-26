import commonModule from '../../../commonModule';

class LoadMaskProvider {

    constructor() {

    }

    setDefaultAppendEl(el) {
        this.defaultAppendEl = el;
    }

    /*ngInject*/
    $get($document, $rootScope, lodash, $q) {
        return {
            show: show,
            hide: hide,
            create: create,
            setPromises: setPromises
        }

        let _ = lodash;

        /**
         * Show loading mask
         * @param selector
         */
        function show(selector) {
            if (angular.element(selector)) {
                angular.element(selector).show();
            }
        }

        /**
         * Hide loading mask
         * @param selector
         */
        function hide(selector) {
            if (angular.element(selector)) {
                angular.element(selector).hide();
            }
        }

        /**
         * Create loading mask
         * @param id
         * @param message
         * @param appendEl
         * @param promises
         */
        function create(id, message, appendEl, promises) {
            appendEl = appendEl || defaultAppendEl;
            var selector = "#" + id;
            var injector = angular.injector(['ng']),
                $compile = injector.get('$compile'),
                template = angular.element('<load-mask id="' + id + '" el="' + appendEl + '" message="' + message + '"></load-mask>');
            var loadMaskExist = $document.find(selector);
            //Check exist mask in DOM
            if (!loadMaskExist.length) {
                $document.find(appendEl).prepend($compile(template)($rootScope));
            }
            //Check finally promise if apply and hide mask
            if (promises) {
                allExecPromises = promises;
                allPromises(allExecPromises).finally(function () {
                    hide(selector);
                });
            }
        }

        /**
         * Set promises
         * @param promises
         * @returns {*}
         */
        function setPromises(promises) {
            allExecPromises = promises;
        }

        /**
         * Check all promise is executed
         * @param promises
         * @returns {*}
         */
        function allPromises(promises) {
            if (_.isArray(promises)) {
                return $q.all(promises);
            }
            return promises;
        }
    }

}

commonModule.provider('LoadMask', LoadMaskProvider);

export default commonModule;
