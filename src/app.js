//Import resources
import {angular} from './resources';

//Import common and routing module
import {commonModule} from 'commons';
import {routing} from 'commons';
import futureRoutes from './routes.json!';
//Import core module
import core from './packages/core';

var appModuleName = 'app';
var appModuleVendorDependencies = ['ui.router', 'ui.router.stateHelper', 'oc.lazyLoad', 'ngResource', 'ngAnimate',
    'toastr', 'validation', 'validation.rule', 'LocalStorageModule', 'common', 'app.core'];

let app = angular.module(appModuleName, appModuleVendorDependencies);

/**
 * Add future routes
 */
app.config(routing(app, futureRoutes));

app.config(($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider,
            toastrConfig, $validationProvider) => {
    //$locationProvider.html5Mode(true);
    $httpProvider.useApplyAsync(true);
    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //----------- Validators config ---------------------------
    angular.extend($validationProvider, {
        validCallback: function (element) {
            //$(element).closest('div.form-group').find('label.has-error').hide();
            $(element).parents('.form-group:first').removeClass('has-error');
        },
        invalidCallback: function (element) {
            //Mover error para el tag con class form-group
            $(element).parents('.form-group:first').addClass('has-error');
        }
    });

    $validationProvider.setErrorHTML(function (msg) {
        return '<p class="control-label pull-left has-error">' + msg + '</p>';
    });
    $validationProvider.showSuccessMessage = false;
    //-------------------------------------------------------

    //Config toastr
    angular.extend(toastrConfig, {
        autoDismiss: false,
        allowHtml: true,
        closeButton: true,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body',
        closeHtml: '<button>&times;</button>',
        onHidden: null,
        onShown: null,
        onTap: null,
        iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        },
        progressBar: true,
        timeOut: 5000,
        titleClass: 'toast-title',
        toastClass: 'toast'
    });
});

/**
 * Execute app
 */
angular.element(document).ready(function () {
    //Fixing facebook bug with redirect
    if (window.location.hash && window.location.hash === '#_=_') {
        if (window.history && history.pushState) {
            window.history.pushState('', document.title, window.location.pathname);
        } else {
            // Prevent scrolling by storing the page's current scroll offset
            var scroll = {
                top: document.body.scrollTop,
                left: document.body.scrollLeft
            };
            window.location.hash = '';
            // Restore the scroll offset, should be flicker free
            document.body.scrollTop = scroll.top;
            document.body.scrollLeft = scroll.left;
        }
    }
    angular.bootstrap(document.body, [app.name], {
        // strictDi: true
    });
});

export default app;
