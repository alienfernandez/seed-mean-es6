import mainModule from '../../mainModule';
import angular from 'angular';

class MainContentController {

    /*ngInject*/
    constructor($scope, uiGridConstants, uiGridPinningConstants, mainService, i18nService) {
        i18nService.setCurrentLang('es');
        this.$scope = $scope;
        this.gridOptions = {
            enableRowSelection: false,
            enableFiltering: true,
            multiSelect: false,
            paginationPageSizes: [10, 20, 50, 100],
            paginationPageSize: 20,
            exporterMenuCsv: false,
            exporterMenuPdf: false,
            enableGridMenu: true,
            columnDefs: this.gridColumns,
            exporterOlderExcelCompatibility: true,
            i18n: "es",
            gridMenuCustomItems: [
                {
                    title: 'Borrar Filtros',
                    action: ($event) => {
                        //$scope.gridApi.exporter.csvExport(type, 'visible', myElement);
                    },
                    order: 210
                },
                {
                    title: 'Exportar Todo CSV',
                    action: ($event) => {
                        this.exportToCSV('all', 'visible', 'csv');
                    },
                    order: 210
                },
                {
                    title: 'Exportar Visible CSV',
                    action: ($event) => {
                        this.exportToCSV('visible', 'visible', 'csv');
                    },
                    order: 210
                }
            ],
            onRegisterApi: (gridApi) => {
                this.gridApi = gridApi;
                gridApi.core.on.columnVisibilityChanged($scope, function (changedColumn) {
                    this.$scope.columnChanged = {
                        name: changedColumn.colDef.name,
                        visible: changedColumn.colDef.visible
                    };
                });
            }
        };

        mainService.getListEmployee()
            .then((data) => {
                this.gridOptions.data = (data.items) ? data.items : [];
                this.data = data.items;
                this.gridOptions.paginationPageSizes.push(data.items.length);
                this.$scope.$digest();
                this.fillSelectFilterValues();
            });


    }

    exportToCSV(row_type, column_type, format) {
        if (format == 'csv') {
            var myElement = angular.element(document.querySelectorAll(".custom-csv-link-location"));
            this.gridApi.exporter.csvExport(row_type, column_type, myElement);
        } else if (format == 'pdf') {
            this.gridApi.exporter.pdfExport(row_type, column_type);
        }
        ;
    }

    get gridColumnsContent() {
        return this.gridColumns;
    }

    get gridOptionsContent() {
        return this.gridOptions;
    }

}

mainModule.controller('mainContentController', MainContentController);

export default mainModule;
