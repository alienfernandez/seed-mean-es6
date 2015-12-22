import coreModule from '../../coreModule';

class ComponentsController {

    /*ngInject*/
    constructor(AuthenticationService, DataItemModule, DataItem) {
        // This provides Authentication context.
        this.authentication = AuthenticationService;
        this.user = AuthenticationService.user;
        this.options = {
            user: this.user
        };
        this.tabsDataView = [{
            iconCls: 'fa fa-th-large',
            name: 'Preview Component',
            highlight: false
        }, {
            iconCls: 'fa fa-code',
            name: 'DataViewController.js',
            uri: 'app/packages/core/web/views/components/data-view/highlight/dataview.js',
            highlight: true
        }, {
            iconCls: 'fa fa-html5',
            name: 'DataView.tpl.html',
            uri: 'app/packages/core/web/views/components/data-view/highlight/dataview-view.tpl.html',
            highlight: true
        }];
        this.currentTab = this.tabsDataView[0];

        this.options = {
            store: [
                {
                    name: "Modulo de Inventario",
                    group: 1,
                    groupName: "Grupo de Logistica",
                    iconCls: 'fa fa-university',
                    description: 1
                },
                {
                    name: "Modulo de facturacion",
                    group: 1,
                    groupName: "Grupo de Logistica",
                    iconCls: 'fa fa-university',
                    description: "Modulo de facturacion"
                },
                {
                    name: "Modulo de activos fijos",
                    group: 1,
                    groupName: "Grupo de Logistica",
                    iconCls: 'fa fa-university',
                    description: "Modulo de activos fijos"
                }, {
                    name: "Modulo de seguridad",
                    group: 2,
                    groupName: "Grupo de seguridad",
                    iconCls: 'fa fa-key',
                    description: "Modulo de seguridad"
                },
                {
                    name: "Modulo de configuracion",
                    group: 3,
                    groupName: "Grupo de configuracion",
                    iconCls: 'fa fa-cogs',
                    description: "Modulo de configuracion"
                },
            ],
            itemSelector: 'div.dv-thumb-wrap',
            overItemCls: 'dv-view-over',
            selectItemCls: 'dv-item-selected', //dv-view-item-focused
            multiSelect: false,
            groupBy: {
                key: 'group',
                name: 'groupName',
                iconCls: 'iconCls'
            },
            template: {
                component: DataItemModule,
                listeners: {
                    onClick: (item, dataView, index, event) => {
                        console.log("item", item);
                        console.log("dataView", dataView);
                        console.log("index", index);
                        console.log("event", event);
                    }
                }

            }
        };
    }
}

coreModule.controller('ComponentsController', ComponentsController);

export default coreModule;
