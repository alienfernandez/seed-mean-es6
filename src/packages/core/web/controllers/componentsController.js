import coreModule from '../../coreModule';

class ComponentsController {

    /*ngInject*/
    constructor(AuthenticationService, DataItemModule, DataItem) {
        // This provides Authentication context.
        this.authentication = AuthenticationService;
        this.DataItemModule = DataItemModule;
        this.DataItem = DataItem;
        this.user = AuthenticationService.user;
        this.options = {
            user: this.user
        };

        this.dataViewComponent();
        this.loadMaskComponent();
        this.maskReComponent();
        this.navbarComponent();

    }

    dataViewComponent() {
        //Data view component
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
        this.currentTabDV = this.tabsDataView[0];

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
                component: this.DataItemModule,
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

    loadMaskComponent() {
        //Load Mask component
        this.tabsLoadMask = [{
            iconCls: 'fa fa-spinner',
            name: 'Preview Component',
            highlight: false
        }, {
            iconCls: 'fa fa-code',
            name: 'LoadMaskController.js',
            uri: 'app/packages/core/web/views/components/load-mask/highlight/loadmask.js',
            highlight: true
        }];
        this.currentTabLM = this.tabsLoadMask[0];
    }

    maskReComponent() {
        //Load Mask component
        this.tabsMaskRe = [{
            iconCls: 'fa fa-asterisk',
            name: 'Preview Component',
            highlight: false
        }, {
            iconCls: 'fa fa-html5',
            name: 'MaskRe.tpl.html',
            uri: 'app/packages/core/web/views/components/maskre/highlight/maskre-view.tpl.html',
            highlight: true
        }];
        this.currentTabMR = this.tabsMaskRe[0];
    }

    navbarComponent() {
        //Load Mask component
        this.tabsNavbar = [{
            iconCls: 'fa fa-navicon',
            name: 'Preview Component',
            highlight: false
        }, {
            iconCls: 'fa fa-html5',
            name: 'NavBar.tpl.html',
            uri: 'app/packages/core/web/views/components/navbar/highlight/navbar-view.tpl.html',
            highlight: true
        }];
        this.currentTabNB = this.tabsNavbar[0];
    }
}

coreModule.controller('ComponentsController', ComponentsController);

export default coreModule;
