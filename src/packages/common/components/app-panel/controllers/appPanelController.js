import commonModule from '../../../commonModule';

class AppPanelController {

    /*ngInject*/
    constructor(AuthenticationService, SecurityService, DataItemAppPanel) {
        // This provides Authentication context.
        this.authentication = AuthenticationService;
        this.user = AuthenticationService.user;
        this.security = SecurityService;

        this.options = {
            data: {
                store: [
                    {
                        name: "Blog",
                        iconCls: 'fa fa-university',
                        description: "Blog",
                        state: "blog"
                    }, {
                        name: "Security",
                        iconCls: 'fa fa-key',
                        description: "Security",
                        state: "admin.panel"
                    }, {
                        name: "Home",
                        iconCls: 'fa fa-home',
                        description: "Home",
                        state: "home"
                    }, {
                        name: "Chat",
                        iconCls: 'fa fa-key',
                        description: "Chat",
                        state: "chat"
                    }, {
                        name: "System",
                        iconCls: 'fa fa-cog',
                        description: "System",
                        state: "admin.panel"
                    }
                ],
                overItemCls: 'dv-view-over',
                template: {
                    component: DataItemAppPanel,
                    listeners: {
                        onClick: (item, dataView, index, event) => {
                            console.log("item", item);
                            console.log("dataView", dataView);
                            console.log("index", index);
                            console.log("event", event);
                        }
                    }
                }
            }
        };
    }
}

commonModule.controller('AppPanelController', AppPanelController);

export default commonModule;
