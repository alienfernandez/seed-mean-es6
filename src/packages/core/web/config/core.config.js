/**
 * Module config
 */
class CoreConfig {

    constructor($stateProvider, Templates) {
        this.$stateProvider = $stateProvider;
        this.Templates = Templates;
    }

    /**
     * Set state provider
     * @param stateProvider
     */
    setStateProvider(stateProvider) {
        this.$stateProvider = stateProvider;
    }

    /**
     * Init module routes
     */
    initModuleRoutes() {
        this.$stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
                templateUrl: this.Templates.HomeTemplate.name
            }).state('components', {
                abstract: true,
                url: '/components',
                templateUrl: this.Templates.ComponentsTpl.name,
                controller: 'ComponentsController',
                controllerAs: 'cmpCtrl'
            }).state('components.dataview', {
                url: '/dataview',
                templateUrl: this.Templates.DataViewTpl.name,
                controller: 'ComponentsController',
                controllerAs: 'cmpCtrl'
            })
            .state('not-found', {
                url: '/not-found',
                templateUrl: this.Templates.Template404.name,
                data: {
                    ignoreState: true
                }
            })
            .state('bad-request', {
                url: '/bad-request',
                templateUrl: this.Templates.Template400.name,
                data: {
                    ignoreState: true
                }
            })
            .state('forbidden', {
                url: '/forbidden',
                templateUrl: this.Templates.Template403.name,
                data: {
                    ignoreState: true
                }
            });
        ;
    }
}

export default CoreConfig;
