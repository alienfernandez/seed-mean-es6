import securityModule from '../../securityModule';

class UserService {

    constructor($resource) {
        this.$resource = $resource;
        return this.$resource('api/users/:userId', {
            userId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }

    /*ngInject*/
    static instance($resource) {
        return new UserService($resource);
    }

    //
    //getUserResource(uri = 'api/users/:userId') {
    //    return this.$resource(uri, {
    //        userId: '@_id'
    //    }, {
    //        update: {
    //            method: 'PUT'
    //        }
    //    });
    //}
}

securityModule.service('UserService', UserService.instance);

export default securityModule;
