define(["github:huei90/angular-validation@1.3.2/dist/angular-validation-rule"], function (src) {
    return src;
});

(function () {
    'use strict';
    angular.module('app.validation.rule', ['validation'])
        .config(['$validationProvider',
            function ($validationProvider) {
                //Set validation html error
                $validationProvider.setErrorHTML(function (msg) {
                    //console.log(msg)
                    return "<p class=\"pull-left has-error\">" + msg + "</p>";
                });
                $validationProvider.showSuccessMessage = false;

                // Setup `ip` validation
                var expression = {
                    ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
                };

                var validMsg = {
                    ip: {
                        error: 'This isn\'t ip address',
                        success: 'It\'s ip'
                    }
                };

                $validationProvider.setExpression(expression) // set expression
                    .setDefaultMsg(validMsg); // set valid message

                // Setup `regexp` validation
                $validationProvider
                    .setExpression({
                        regexp: function (value, scope, element, attrs) {
                            //console.log(attrs)
                            if (!attrs.regexp) {
                                return true;
                            }
                            let regExp = new RegExp(attrs.regexp, "m");
                            return regExp.test(element.val());
                        }
                    })
                    .setDefaultMsg({
                        regexp: {
                            error: 'This should be valid expression'
                        }
                    });

            }
        ]);

}).call(this);
