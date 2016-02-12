import commonModule from '../../../../commonModule';
let xmppEventStrophe;
class XmppCoreEventStropheFactory {

    /*ngInject*/
    constructor($injector) {
        xmppEventStrophe = this;
        this.injector = $injector;
        //this.coreService = $injector.get('XmppCore');
    }

    Connect(status) {
        var coreService = xmppEventStrophe.injector.get('XmppCore')
        console.log("coreService", coreService)
        coreService.setStropheStatus(status);
        switch (status) {
            case Strophe.Status.CONNECTED:
                console.log("[Connection] Connected");
                coreService.storeUserData();

                //ChatIM.connection.addHandler(ChatIM.onVersion, Strophe.NS.VERSION,
                //    'iq', null, null, null);
                //ChatIM.connection.addHandler(ChatIM.onRoster, Strophe.NS.ROSTER,
                //    'iq', null, null, null);
                //ChatIM.connection.addHandler(ChatIM.onPresence, null, 'presence',
                //    null, null, null);
                //ChatIM.connection.addHandler(ChatIM.onMessage, null, 'message',
                //    null, null,  null);
                //Get roster then announce presence.
                //get roster

                //on chat
                //Chat.connection.addHandler(Chat.on_message, null, "message", "chat");
                //var iq = $iq({type: 'get'}).c('query', {xmlns: 'jabber:iq:roster'});
                //ChatcoreService._connection.sendIQ(iq, Chat.on_roster);

                coreService._connection.send($iq({type: 'get', xmlns: Strophe.NS.CLIENT}).c(
                    'query', {xmlns: Strophe.NS.ROSTER}).tree());
                coreService._connection.send($pres().tree());
                break;

            case Strophe.Status.ATTACHED:
                console.log("[Connection] Attached");
                coreService.stanza.Presence();
                break;

            case Strophe.Status.DISCONNECTED:
                console.log("[Connection] Disconnected");
                break;

            case Strophe.Status.AUTHFAIL:
                console.log("[Connection] Authentication failed");
                break;

            case Strophe.Status.CONNECTING:
                console.log("[Connection] Connecting");
                break;

            case Strophe.Status.DISCONNECTING:
                console.log("[Connection] Disconnecting");
                break;

            case Strophe.Status.AUTHENTICATING:
                console.log("[Connection] Authenticating");
                break;

            case Strophe.Status.ERROR:
            case Strophe.Status.CONNFAIL:
                console.log("[Connection] Failed (" + status + ")");
                break;

            default:
                console.log("[Connection] What?!");
                break;
        }
    }

}

//commonModule.factory('XmppCoreEventStrophe', XmppCoreEventStrophe.instance);
commonModule.factory('XmppCoreEventStrophe', ['$injector', ($injector) => new XmppCoreEventStropheFactory($injector)]);

export default commonModule;
