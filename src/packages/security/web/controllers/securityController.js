import securityModule from '../../securityModule';

class SecurityController {

    /*ngInject*/
    constructor($state, $window, $location, AuthenticationService, SecurityService, LoadMask,
                DataItemModule, DataItem) {
        this.loadMask = LoadMask;
        this.loadMask.create('loadMaskData', "Espere por favor, cargando ...", 'body');
        this.authentication = AuthenticationService;
        this.security = SecurityService;
        this.$state = $state;
        this.$window = $window;

        // If user is signed in then redirect back home
        var credentials = this.authentication.getCredentials();
        if (credentials && credentials.user) {
            $location.path('/');
            //$state.transitionTo('main');
        }

        this.options = {
            store: [
                {name: "Modulo de seguridad", group: 1, groupName: "Grupo de seguridad", iconCls: 'fa fa-key', description: "Modulo de seguridad"},
                {name: "Modulo de portal", group: 2, groupName: "Grupo de portal", iconCls: 'fa fa-home', description: "Modulo de portal"},
                {name: "Modulo de Inventario", group: 3,  groupName: "Grupo de Logistica", iconCls: 'fa fa-university', description: 1},
                {name: "Modulo de facturacion", group: 3,  groupName: "Grupo de Logistica", iconCls: 'fa fa-university', description: "Modulo de facturacion"},
                {name: "Modulo de recursos humanos", group: 4, groupName: "Grupo de recursos humanos", iconCls: 'fa fa-user', description: "Modulo de recursos humanos"},
                {name: "Modulo de pruebas productos", group: 3, groupName: "Grupo de Logistica", iconCls: 'fa fa-university',  description: "Modulo de pruebas"},
                {name: "Modulo de activos fijos", group: 3, groupName: "Grupo de Logistica", iconCls: 'fa fa-university', description: "Modulo de activos fijos"},
                {name: "Modulo de control asistencia", group: 4, groupName: "Grupo de recursos humanos", iconCls: 'fa fa-user', description: "Modulo de control",},
                {name: "Modulo de estructura y composicion", group: 5, groupName: "Grupo de estructura y composicion", iconCls: 'fa fa-tree',  description: "Modulo de estructura y composicion",},
                {name: "Modulo de configuracion", group: 6, groupName: "Grupo de configuracion", iconCls: 'fa fa-cogs', description: "Modulo de configuracion"},
            ],
            itemSelector: 'div.dv-thumb-wrap',
            overItemCls: 'dv-view-over',
            selectItemCls: 'dv-item-selected', //dv-view-item-focused
            multiSelect: false,
            groupBy: {
                key : 'group',
                name : 'groupName',
                iconCls: 'iconCls'
            },
            template: {
                component: DataItemModule,
                listeners: {
                    onClick: (item, dataView, index, event) => {
                        console.log("dataView", dataView);
                    }
                }
            }
        };


        this.options1 = {
            store: [
                {name: "Modulo de seguridad", group: 1, groupName: "Grupo de seguridad", iconCls: 'fa fa-key', description: "Modulo de seguridad"},
                {name: "Modulo de portal", group: 2, groupName: "Grupo de portal", iconCls: 'fa fa-home', description: "Modulo de portal"},
                {name: "Modulo de Inventario", group: 3,  groupName: "Grupo de Logistica", iconCls: 'fa fa-university', description: 1},
                {name: "Modulo de facturacion", group: 3,  groupName: "Grupo de Logistica", iconCls: 'fa fa-university', description: "Modulo de facturacion"},
                {name: "Modulo de recursos humanos", group: 4, groupName: "Grupo de recursos humanos", iconCls: 'fa fa-user', description: "Modulo de recursos humanos"},
                {name: "Modulo de pruebas productos", group: 3, groupName: "Grupo de Logistica", iconCls: 'fa fa-university',  description: "Modulo de pruebas"},
                {name: "Modulo de activos fijos", group: 3, groupName: "Grupo de Logistica", iconCls: 'fa fa-university', description: "Modulo de activos fijos"},
                {name: "Modulo de control asistencia", group: 4, groupName: "Grupo de recursos humanos", iconCls: 'fa fa-user', description: "Modulo de control",},
                {name: "Modulo de estructura y composicion", group: 5, groupName: "Grupo de estructura y composicion", iconCls: 'fa fa-tree',  description: "Modulo de estructura y composicion",},
                {name: "Modulo de configuracion", group: 6, groupName: "Grupo de configuracion", iconCls: 'fa fa-cogs', description: "Modulo de configuracion"},
            ],
            itemSelector: 'div.dv-thumb-wrap',
            overItemCls: 'dv-view-over',
            selectItemCls: 'dv-item-selected',
            multiSelect: false,
            template: {
                component: DataItem,
                listeners: {
                    onClick: (item, dataView, index, event) => {
                        console.log("item", item);
                    }
                }
            }
        };
    }



    signup(isValid) {
        this.error = null;
        if (!isValid) {
            return false;
        }
        console.log("this.credentials", this.credentials)
        this.security.signup(this.credentials)
            .then((response) => {
                this.authentication.getCredentials().user = response;

                // And redirect to the previous or home page
                this.$state.go($state.previous.state.name || 'home', $state.previous.params);
            })
            .catch(function (error) {
                this.error = error.message;
            });
    }

    signin(isValid) {
        this.loadMask.show('#loadMaskData');
        this.error = null;
        if (!isValid) {
            return false;
        }
        this.security.signin(this.credentials)
            .then((response) => {
                this.authentication.getCredentials().user = response;

                //this.loadMask.hide('#loadMaskData');
                // And redirect to the previous or home page
                this.$state.go(this.$state.previous.state.name || 'home', this.$state.previous.params);
            })
            .catch((error) => {
                console.log("error", error);
                //this.loadMask.hide('#loadMaskData');
                this.error = error.message;
            });
    }

    callOauthProvider() {
        let url = '';
        if (this.$state.previous && this.$state.previous.href) {
            url += '?redirect_to=' + encodeURIComponent(this.$state.previous.href);
        }

        // Effectively call OAuth authentication route:
        if (url) {
            this.$window.location.href = url;
        }
    }

}

securityModule.controller('SecurityController', SecurityController);

export default securityModule;
