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
        "debug": "assets/js/debug.js",
        "pouchdb": "assets/js/pouchdb.js",
        "fancybox-plus": "assets/js/fancybox-plus.js",
        "templates": "assets/templates/templates.js",
        "validations-rules": "assets/js/validations-rules.js",
        "jquery-fancybox-plus": "assets/js/jquery.fancybox-plus.js"
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
        "github:twbs/bootstrap@3.3.5": {
            "deps": [
                "github:twbs/bootstrap@3.3.5/css/bootstrap.min.css!"
            ]
        }
    },

    map: {
        "DoersGuild/jQuery.print": "github:DoersGuild/jQuery.print@1.3.3",
        "MrRio/jsPDF": "github:MrRio/jsPDF@1.1.135",
        "angular": "github:angular/bower-angular@1.4.5",
        "angular-fancybox-plus": "github:igorlino/angular-fancybox-plus@1.0.2",
        "angular-local-storage": "github:grevory/angular-local-storage@0.2.2",
        "angular-material": "github:angular/bower-material@0.11.0",
        "angular-modal-service": "github:dwmkerr/angular-modal-service@0.6.7",
        "angular-ui-grid": "github:angular-ui/ui-grid@3.0.6",
        "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
        "angular-validation": "github:huei90/angular-validation@1.3.2",
        "babel": "npm:babel-core@5.7.4",
        "babel-runtime": "npm:babel-runtime@5.7.0",
        "bootstrap": "github:twbs/bootstrap@3.3.5",
        "bower-ui-grid": "github:angular-ui/bower-ui-grid@3.0.6",
        "core-js": "npm:core-js@0.9.18",
        "css": "github:systemjs/plugin-css@0.1.18",
        "driftyco/ionicons": "github:driftyco/ionicons@2.0.1",
        "elevateweb/elevatezoom": "github:elevateweb/elevatezoom@2.2.3",
        "fancybox-plus": "github:igorlino/fancybox-plus@1.3.6",
        "font-awesome": "github:FortAwesome/Font-Awesome@4.4.0",
        "image": "github:systemjs/plugin-image@0.1.0",
        "jquery": "github:components/jquery@2.1.4",
        "jquery/jquery-ui": "github:jquery/jquery-ui@1.11.4",
        "json": "github:systemjs/plugin-json@0.1.0",
        "moment": "github:moment/moment@2.10.6",
        "mongoose": "github:Automattic/mongoose@4.2.1",
        "ng-file-upload": "github:danialfarid/ng-file-upload-bower@7.0.17",
        "ng-lodash": "npm:ng-lodash@0.2.3",
        "ngStorage": "github:gsklee/ngStorage@0.3.9",
        "ocLazyLoad": "github:ocombe/ocLazyLoad@1.0.3",
        "plugin-css": "github:systemjs/plugin-css@0.1.18",
        "plugin-image": "github:systemjs/plugin-image@0.1.0",
        "plugin-json": "github:systemjs/plugin-json@0.1.0",
        "pouchdb/pouchdb": "github:pouchdb/pouchdb@4.0.1",
        "toastr": "github:johnpapa/toastr-bower@2.1.2",
        "ui-grid": "github:angular-ui/bower-ui-grid@3.0.6",
        "ui-router-extras": "npm:ui-router-extras@0.0.14",
        "ui-router-stateHelper": "github:marklagendijk/ui-router.stateHelper@1.3.1",
        "ui-select": "github:angular-ui/ui-select@0.12.1",
        "v-accordion": "github:LukaszWatroba/v-accordion@1.3.1",
        "visionmedia/debug": "github:visionmedia/debug@2.2.0",
        "github:angular-ui/ui-router@0.2.15": {
            "angular": "github:angular/bower-angular@1.4.5"
        },
        "github:angular/bower-angular-animate@1.4.7": {
            "angular": "github:angular/bower-angular@1.4.5"
        },
        "github:angular/bower-angular-aria@1.4.7": {
            "angular": "github:angular/bower-angular@1.4.5"
        },
        "github:angular/bower-material@0.11.0": {
            "angular": "github:angular/bower-angular@1.4.5",
            "angular-animate": "github:angular/bower-angular-animate@1.4.7",
            "angular-aria": "github:angular/bower-angular-aria@1.4.7",
            "css": "github:systemjs/plugin-css@0.1.18"
        },
        "github:jspm/nodelibs-process@0.1.1": {
            "process": "npm:process@0.10.1"
        },
        "github:twbs/bootstrap@3.3.5": {
            "jquery": "github:components/jquery@2.1.4"
        },
        "npm:babel-runtime@5.7.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:core-js@0.9.18": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:ng-lodash@0.2.3": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:ui-router-extras@0.0.14": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        }
    }
});
