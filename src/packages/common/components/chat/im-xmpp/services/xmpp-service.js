import commonModule from '../../../../commonModule';
import XmppCoreService from '../core/xmpp-core-service';

class ChatXmppFactory {

    constructor(lodash, $chatConstants, localStorageService) {
        this._ = lodash;
        this.ChatXmppCore = new XmppCoreService($chatConstants, localStorageService);
    }

    /*ngInject*/
    static instance(lodash, $chatConstants, localStorageService) {
        return new ChatXmppFactory(lodash, $chatConstants, localStorageService);
    }

    init(service, options) {
        this.ChatXmppCore.init(service, options);
    }

    getXmppCore() {
        return this.ChatXmppCore;
    }


}

commonModule.factory('ChatXmpp', ChatXmppFactory.instance);

export default commonModule;
