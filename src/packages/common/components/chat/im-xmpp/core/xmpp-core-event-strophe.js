import ChatXmppCoreLog from './xmpp-core-log';
//import Strophe from 'strophe';

class XmppCoreEventStrophe {

    constructor(XmppCoreService) {
        //this.log = new ChatXmppCoreLog(true);
        this.log = function () {
            
        };
        this.coreService = XmppCoreService;
    }

    Connect(status) {
        this.coreService.setStropheStatus(status);
        switch (status) {
            case Strophe.Status.CONNECTED:
                this.log("[Connection] Connected");

            case Strophe.Status.ATTACHED:
                this.log("[Connection] Attached");
                this.coreService.stanza.Presence();
                break;

            case Strophe.Status.DISCONNECTED:
                this.log("[Connection] Disconnected");
                break;

            case Strophe.Status.AUTHFAIL:
                this.log("[Connection] Authentication failed");
                break;

            case Strophe.Status.CONNECTING:
                this.log("[Connection] Connecting");
                break;

            case Strophe.Status.DISCONNECTING:
                this.log("[Connection] Disconnecting");
                break;

            case Strophe.Status.AUTHENTICATING:
                this.log("[Connection] Authenticating");
                break;

            case Strophe.Status.ERROR:
            case Strophe.Status.CONNFAIL:
                this.log("[Connection] Failed (" + status + ")");
                break;

            default:
                this.log("[Connection] What?!");
                break;
        }
    }

}

export default XmppCoreEventStrophe;
