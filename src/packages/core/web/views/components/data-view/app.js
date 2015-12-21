var app = angular.module('plunker', ['ngSelect', 'hljs']);

app.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
        // replace tab with 2 spaces
        tabReplace: '  '
    });
});

app.controller('MainCtrl', function($scope, $timeout) {

    // no code here!

});
