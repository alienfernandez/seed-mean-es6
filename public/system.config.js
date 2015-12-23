System.config({
    baseURL: ".",
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {
        "optional": [
            "runtime"
        ]
    },
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*",
        "packages/*": "app/packages/*.js",
        "commons": "app/packages/common/common.js",
        "core": "app/packages/core/index.js",
        "debug": "assets/js/debug.js",
        "react-js": "assets/js/react.js",
        "highlight-js": "assets/js/highlight-js.js",
        "fancybox-plus": "assets/js/fancybox-plus.js",
        "jquery-fancybox-plus": "assets/js/jquery.fancybox-plus.js",
        "require_js": "assets/js/require.js",
        "babel": "public/jspm_packages/npm/babel-core@5.7.4/browser.js",
        "systemjs": "public/jspm_packages/system.js",
        "system-polyfills": "public/jspm_packages/system-polyfills.js",
        "es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js"
    },

    meta: {
        "github:angular/bower-angular@1.4.5/angular": {
            "format": "global",
            "exports": "angular"
        },
        "github:angular/bower-angular-mocks@1.4.5/angular-mocks": {
            "deps": [
                "angular"
            ]
        },
        "github:angular-ui/ui-router@0.2.15/angular-ui-router": {
            "deps": [
                "angular"
            ]
        },
        "github:ocombe/ocLazyLoad@1.0.3/dist/ocLazyLoad": {
            "deps": [
                "angular"
            ]
        },
        "npm:ui-router-extras@0.0.14/release/modular/ct-ui-router-extras.core": {
            "format": "global",
            "deps": [
                "angular"
            ]
        },
        "npm:ui-router-extras@0.0.14/release/modular/ct-ui-router-extras.future": {
            "format": "global",
            "deps": [
                "npm:ui-router-extras@0.0.14/release/modular/ct-ui-router-extras.core"
            ]
        },
        "github:angular-ui/bower-ui-grid@3.0.3": {
            "deps": [
                "github:angular-ui/bower-ui-grid@3.0.3/ui-grid.min.css!"
            ]
        },
        "github:LukaszWatroba/v-accordion@1.3.1": {
            "deps": [
                "github:LukaszWatroba/v-accordion@1.3.1/dist/v-accordion.min.css!"
            ]
        },
        "github:twbs/bootstrap@3.3.6": {
            "deps": [
                "github:twbs/bootstrap@3.3.6/css/bootstrap.min.css!"
            ]
        },
        "npm:font-awesome@4.4.0": {
            "deps": [
                "npm:font-awesome@4.4.0/css/font-awesome.min.css!"
            ]
        },
        "github:igorlino/angular-fancybox-plus@1.0.2": {
            "deps": [
                "github:igorlino/angular-fancybox-plus@1.0.2/css/jquery.fancybox-plus.css!"
            ]
        },
        "npm:angular-toastr@1.6.0": {
            "deps": [
                "npm:angular-toastr@1.6.0/dist/angular-toastr.css!",
                "npm:angular-toastr@1.6.0/dist/angular-toastr.tpls"
            ]
        },
        "github:huei90/angular-validation@1.3.2": {
            "deps": [
                "github:huei90/angular-validation@1.3.2/dist/angular-validation-rule"
            ]
        },
        "highlight-js": {
            "deps": [
                "github:isagalaev/highlight.js@9.0.0/src/styles/darkula.css!"
            ]
        }
    },
    map: {
        "DoersGuild/jQuery.print": "github:DoersGuild/jQuery.print@1.3.3",
        "MrRio/jsPDF": "github:MrRio/jsPDF@1.1.135",
        "angular": "github:angular/bower-angular@1.4.8",
        "angular-animate": "npm:angular-animate@1.4.8",
        "angular-fancybox-plus": "github:igorlino/angular-fancybox-plus@1.0.2",
        "angular-highlightjs": "npm:angular-highlightjs@0.5.1",
        "angular-local-storage": "github:grevory/angular-local-storage@0.2.3",
        "angular-material": "github:angular/bower-material@0.11.4",
        "angular-mocks": "github:angular/bower-angular-mocks@1.4.8",
        "angular-modal-service": "github:dwmkerr/angular-modal-service@0.6.9",
        "angular-relative-date": "github:wildlyinaccurate/angular-relative-date@1.0.0",
        "angular-resource": "github:angular/bower-angular-resource@1.4.8",
        "angular-translate": "npm:angular-translate@2.8.1",
        "angular-translate-loader-static": "npm:angular-translate-loader-static-files@2.8.1",
        "angular-ui-grid": "github:angular-ui/ui-grid@3.0.6",
        "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
        "angular-validation": "github:huei90/angular-validation@1.3.2",
        "babel": "npm:babel-core@5.8.34",
        "babel-runtime": "npm:babel-runtime@5.8.34",
        "bootstrap": "github:twbs/bootstrap@3.3.6",
        "bower-ui-grid": "github:angular-ui/bower-ui-grid@3.0.7",
        "classNames": "github:JedWatson/classnames@2.2.0",
        "core-js": "npm:core-js@0.9.18",
        "css": "github:systemjs/plugin-css@0.1.20",
        "driftyco/ionicons": "github:driftyco/ionicons@2.0.1",
        "elevateweb/elevatezoom": "github:elevateweb/elevatezoom@2.2.3",
        "fancybox-plus": "github:igorlino/fancybox-plus@1.3.6",
        "font-awesome": "npm:font-awesome@4.5.0",
        "highlight": "github:isagalaev/highlight.js@9.0.0",
        "image": "github:systemjs/plugin-image@0.1.0",
        "jquery": "github:components/jquery@2.1.4",
        "jquery/jquery-ui": "github:jquery/jquery-ui@1.11.4",
        "json": "github:systemjs/plugin-json@0.1.0",
        "lodash": "npm:lodash@3.10.1",
        "moment": "github:moment/moment@2.10.6",
        "mongoose": "github:Automattic/mongoose@4.3.1",
        "ng-file-upload": "npm:ng-file-upload@10.1.9",
        "ng-lodash": "npm:ng-lodash@0.2.3",
        "ng-select": "github:pc035860/ngSelect@1.0.0",
        "ngReact": "github:ngReact/ngReact@0.2.0",
        "ngStorage": "github:gsklee/ngStorage@0.3.10",
        "ocLazyLoad": "github:ocombe/ocLazyLoad@1.0.9",
        "plugin-css": "github:systemjs/plugin-css@0.1.20",
        "plugin-image": "github:systemjs/plugin-image@0.1.0",
        "plugin-json": "github:systemjs/plugin-json@0.1.0",
        "react": "github:facebook/react@0.14.3",
        "react-renderer": "npm:react-renderer@0.1.4",
        "socketio": "github:socketio/socket.io@1.3.7",
        "toastr": "npm:angular-toastr@1.6.0",
        "ui-grid": "github:angular-ui/bower-ui-grid@3.0.6",
        "ui-router-extras": "npm:ui-router-extras@0.0.14",
        "ui-router-stateHelper": "github:marklagendijk/ui-router.stateHelper@1.3.1",
        "ui-select": "github:angular-ui/ui-select@0.12.1",
        "v-accordion": "github:LukaszWatroba/v-accordion@1.4.1",
        "visionmedia/debug": "github:visionmedia/debug@2.2.0",
        "github:angular-ui/ui-router@0.2.15": {
            "angular": "github:angular/bower-angular@1.4.8"
        },
        "github:angular/bower-angular-animate@1.4.8": {
            "angular": "github:angular/bower-angular@1.4.8"
        },
        "github:angular/bower-angular-aria@1.4.8": {
            "angular": "github:angular/bower-angular@1.4.8"
        },
        "github:angular/bower-angular-mocks@1.4.8": {
            "angular": "github:angular/bower-angular@1.4.8"
        },
        "github:angular/bower-angular-resource@1.4.8": {
            "angular": "github:angular/bower-angular@1.4.8"
        },
        "github:angular/bower-material@0.11.4": {
            "angular": "github:angular/bower-angular@1.4.8",
            "angular-animate": "github:angular/bower-angular-animate@1.4.8",
            "angular-aria": "github:angular/bower-angular-aria@1.4.8",
            "css": "github:systemjs/plugin-css@0.1.20"
        },
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.5.5"
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "events": "npm:events@1.0.2"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
        },
        "github:jspm/nodelibs-stream@0.1.0": {
            "stream-browserify": "npm:stream-browserify@1.0.0"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:twbs/bootstrap@3.3.6": {
            "jquery": "github:components/jquery@2.1.4"
        },
        "npm:amdefine@1.0.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "module": "github:jspm/nodelibs-module@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:angular-animate@1.4.8": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:angular-highlightjs@0.5.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:angular-translate-loader-static-files@2.8.1": {
            "angular-translate": "npm:angular-translate@2.8.1"
        },
        "npm:angular-translate@2.8.1": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.34": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:buffer@3.5.5": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:core-js@0.9.18": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:core-util-is@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:envify@3.4.0": {
            "jstransform": "npm:jstransform@10.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "through": "npm:through@2.3.8"
        },
        "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:font-awesome@4.5.0": {
            "css": "github:systemjs/plugin-css@0.1.20"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:jstransform@10.1.0": {
            "base62": "npm:base62@0.1.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "source-map": "npm:source-map@0.1.31"
        },
        "npm:lodash@3.10.1": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:ng-file-upload@10.1.9": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:ng-lodash@0.2.3": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:react-renderer@0.1.4": {
            "react": "npm:react@0.12.2"
        },
        "npm:react@0.12.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "envify": "npm:envify@3.4.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:readable-stream@1.1.13": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.2",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "npm:source-map@0.1.31": {
            "amdefine": "npm:amdefine@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:stream-browserify@1.0.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "readable-stream": "npm:readable-stream@1.1.13"
        },
        "npm:string_decoder@0.10.31": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:through@2.3.8": {
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:ui-router-extras@0.0.14": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    }
});
