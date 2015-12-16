import angular from 'angular';
//Import angular translate (i18n for your Angular app)
import 'angular-translate';
import 'angular-translate-loader-static';

import 'ng-file-upload';

//Import all module templates
import * as Templates from './templates';
//Import config module class
import SecurityConfig from './web/config/security.config';

//Import common module
import {commonModule} from 'commons';

/**
 * Security module
 */
let securityModule = angular.module('app.security', [
    'ngFileUpload', 'pascalprecht.translate',

    //Templates
    Templates.SigninTpl.name, Templates.UserEditTpl.name, Templates.AddUserTpl.name,
    Templates.UserListTpl.name, Templates.UserSettingsTpl.name, Templates.UserProfileTpl.name,
    Templates.ChangePasswordTpl.name, Templates.ForgotPasswordTpl.name, Templates.ResetPasswordTpl.name
]).config(($stateProvider, $httpProvider, $translateProvider) => {
    //Init module routes
    new SecurityConfig($stateProvider, Templates).initModuleRoutes();

    //------------- $translateProvider i18n config ---------------
    $translateProvider.useStaticFilesLoader({
        prefix: 'app/packages/security/web/locales/locale-',
        suffix: '.json'
    });
    //-------------------------------------------------------

    // Set the httpProvider "not authorized" interceptor
    $httpProvider.interceptors.push(['$q', '$location', '$injector', 'AuthenticationService',
        function ($q, $location, $injector, AuthenticationService) {
            return {
                responseError: function (rejection) {
                    console.log("rejection", rejection);
                    switch (rejection.status) {
                        case 401:
                            // Deauthenticate the global user
                            AuthenticationService.user = null;

                            // Redirect to signin page
                            $location.path('signin');
                            break;
                        case 403:
                            // Add unauthorized behaviour
                            $injector.get('$state').transitionTo('forbidden');
                            break;
                    }
                    return $q.reject(rejection);
                }
            };
        }
    ]);
});

securityModule.run(() => {

});

export default securityModule;
