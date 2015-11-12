angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("packages/recordStaff/views/templates/fileChooser.tpl.html","<script type=\"text/ng-template\" id=\"fileChoose.html\">\n    <md-dialog aria-label=\"{{paramsFile.title}}\">\n        <form>\n            <md-toolbar>\n                <div class=\"md-toolbar-tools\">\n                    <h2><i class=\"fa fa-image\"></i> {{paramsFile.title}}</h2>\n                    <span flex></span>\n                    <md-button class=\"md-icon-button\" ng-click=\"cancel()\">\n                        <i class=\"fa fa-close\"></i>\n                    </md-button>\n                </div>\n            </md-toolbar>\n            <md-dialog-content style=\"min-width:450px; max-width:450px;max-height:450px; \">\n                <div layout=\"row\">\n                    <div flex=\"40\" ng-show=\"!filesUpload[0]\">\n                        <div class=\"app-file-container\" ng-model=\"filesUpload\"\n                             ngf-multiple=\"true\" ngf-select=\"true\" ngf-keep=\"true\"\n                             ngf-pattern=\"\'.jpg,.png,.gif,.bmp\'\" ngf-max-size=\"\'2MB\'\" accept=\"image/*\"\n                             ngf-drop=\"\" ngf-drag-over-class=\"{accept:\'dragover\', reject:\'dragover-err\', delay:100}\">\n                            <h4>Click para seleccionar una imagen o arrastre una imagen</h4>\n\n                            <div class=\"block-pb10\">\n                                <i class=\"fa fa-3x fa-image\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <div flex=\"40\" ng-show=\"filesUpload[0]\">\n                        <a id=\"fc-close\" style=\"display: block\" ng-click=\"removeFiles()\"></a>\n                        <div class=\"app-image-container\">\n                            <div layout=\"row\">\n                                <img ngf-src=\"!filesUpload[0].$error && filesUpload[0]\" flex=\"100\">\n                            </div>\n                        </div>\n                    </div>\n                    <div flex=\"10\">\n                    </div>\n                    <div flex=\"50\">\n                        <div class=\"block-mt10 block-lh30\">\n                            <div flex=\"100\"><span class=\"text-bold\">Nombre: </span> {{paramsFile.name}}</div>\n                            <div flex=\"100\"><span class=\"text-bold\">Tama&ntilde;o: </span> <span\n                                    class=\"badge badge-info\">{{paramsFile.size}}</span></div>\n                            <div flex=\"100\">\n                        <span><button class=\"btn btn-danger btn-xs\"><i class=\"fa fa-remove\"></i> Eliminar\n                        </button></span>\n                        <span><button class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> Descargar\n                        </button></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div layout=\"row block-mt10\">\n                    <div flex=\"100\">\n                        <div class=\"block-mt10\">\n                            Tama&ntilde;o m&aacute;ximo permitido: <span class=\"badge badge-danger\">{{paramsFile.maxSizeFile}}</span>\n                        </div>\n                        <div class=\"block-mt10\">\n                            Archivos permitidos:\n                            <span class=\"badge badge-info\">jpg</span>\n                            <span class=\"badge badge-info\">gif</span>\n                            <span class=\"badge badge-info\">png</span>\n                            <span class=\"badge badge-info\">bmp</span>\n                        </div>\n\n                    </div>\n                </div>\n\n            </md-dialog-content>\n        </form>\n\n        <div class=\"md-actions\" layout=\"row\"><span flex></span>\n            <md-button ng-click=\"hide(\'Close\')\"> Cerrar</md-button>\n        </div>\n    </md-dialog>\n\n</script>");}]);