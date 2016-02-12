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
        xmppEventStrophe.coreService = coreService;
        coreService.setStropheStatus(status);
        switch (status) {
            case Strophe.Status.CONNECTED:
                console.log("[Connection] Connected");
                coreService.storeUserData();
                coreService._connection.addHandler(xmppEventStrophe.onVersion, Strophe.NS.VERSION, 'iq', null, null, null);
                coreService._connection.addHandler(xmppEventStrophe.onRoster, Strophe.NS.ROSTER, 'iq', null, null, null);
                coreService._connection.addHandler(xmppEventStrophe.onPresence, null, 'presence', null, null, null);
                coreService._connection.addHandler(xmppEventStrophe.onMessage, null, 'message', null, null, null);
                //Get roster then announce presence.
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

    /** Function: onVersion
     *
     *  jabber:iq:version query handler
     */
    onVersion(msg) {
        console.log("On version:", msg);
        Strophe.debug("Version handler");
        if (msg.getAttribute('type') == 'get') {
            var from = msg.getAttribute('from');
            var to = msg.getAttribute('to');
            var id = msg.getAttribute('id');
            var reply = $iq({type: 'result', to: from, from: to, id: id}).c('query',
                {
                    name: "ChatXmpp", version: "1.0", os: "Javascript-capable browser"
                });
            xmppEventStrophe.coreService._connection.send(reply.tree());
        }
        return true;
    }

    /** Function: onRoster
     *
     *  Roster iq handler
     */
    onRoster(msg) {
        console.log("On roster:", msg);
        Strophe.debug("Roster handler");
        console.log("msg.firstChild", msg.firstChild)
        var roster_items = msg.firstChild.getElementsByTagName('item');
        //for (var i = 0; i < roster_items.length; i++) {
        //    var groups = roster_items[i].getElementsByTagName('group');
        //    var group_array = new Array();
        //    for (var g = 0; g < groups.length; g++) {
        //        group_array[group_array.length] =
        //            groups[g].firstChild.nodeValue;
        //    }
        //    TrophyIM.rosterObj.addContact(roster_items[i].getAttribute('jid'),
        //        roster_items[i].getAttribute('subscription'),
        //        roster_items[i].getAttribute('name'), group_array);
        //}
        if (msg.getAttribute('type') == 'set') {
            xmppEventStrophe.coreService._connection.send($iq({
                type: 'reply', id: msg.getAttribute('id'), to: msg.getAttribute('from')
            }).tree());
        }
        return true;
    }

    /** Function: onPresence
     *
     *  Presence handler
     */
    onPresence(msg) {
        Strophe.debug("Presence handler");
        //var type = msg.getAttribute('type') ? msg.getAttribute('type') :
        //    'available';
        //var show = msg.getElementsByTagName('show').length ? Strophe.getText(
        //    msg.getElementsByTagName('show')[0]) : type;
        //var status = msg.getElementsByTagName('status').length ? Strophe.getText(
        //    msg.getElementsByTagName('status')[0]) : '';
        //var priority = msg.getElementsByTagName('priority').length ? parseInt(
        //    Strophe.getText(msg.getElementsByTagName('priority')[0])) : 0;
        //TrophyIM.rosterObj.setPresence(msg.getAttribute('from'), priority,
        //    show, status);
        return true;
    }

    /** Function: onMessage
     *
     *  Message handler
     */
    onMessage(msg) {
        Strophe.debug("Message handler");
        let from = msg.getAttribute('from');
        let type = msg.getAttribute('type');
        let elems = msg.getElementsByTagName('body');
        let message = "";
        if ((type == 'chat' || type == 'normal') && elems.length > 0) {
            var barejid = Strophe.getBareJidFromJid(from);
            var jid_lower = barejid.toLowerCase();
            //var contact = TrophyIM.rosterObj.roster[barejid.toLowerCase()]['contact'];
            //if (contact) { //Do we know you?
            //    if (contact['name'] != null) {
            //        message = contact['name'] + " (" + barejid + "): ";
            //    } else {
            //        message = contact['jid'] + ": ";
            //    }
            //    message += Strophe.getText(elems[0]);
            //TrophyIM.makeChat(from); //Make sure we have a chat window
            //TrophyIM.addMessage(message, jid_lower);
            //if (TrophyIM.activeChats['current'] != jid_lower) {
            //    TrophyIM.activeChats['divs'][jid_lower][
            //        'tab'].className = "trophyimchattab trophyimchattab_a";
            //    TrophyIM.setTabPresence(from,
            //        TrophyIM.activeChats['divs'][jid_lower]['tab']);
            //}
            //}
        }
        return true;
    }

}

//commonModule.factory('XmppCoreEventStrophe', XmppCoreEventStrophe.instance);
commonModule.factory('XmppCoreEventStrophe', ['$injector', ($injector) => new XmppCoreEventStropheFactory($injector)]);

export default commonModule;
