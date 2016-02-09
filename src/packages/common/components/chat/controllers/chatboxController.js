import commonModule from '../../../commonModule';
//import 'strophe';

class ChatboxController {

    /*ngInject*/
    constructor(ChatBoxes, ChatXmpp) {
        //console.log("ChatBoxes", ChatBoxes);
        this.ChatBoxes = ChatBoxes;
        ChatXmpp.init('http://localhost:7070/http-bind/', {});
        ChatXmpp.getXmppCore().connect('alien@localhost', 'dani!');
    }

    closeChatBox(title) {
        this.ChatBoxes.closeChatBox(title);
    }

    onChatBoxToggle(title) {
        this.chatbox = this.ChatBoxes.getChatBoxByTitle(title);
        console.log("this.chatbox", this.chatbox)
        if (this.chatbox.minimized) {
            this.ChatBoxes.onChatBoxMaximized(title);
        } else {
            this.ChatBoxes.onChatBoxMinimized(title);
        }
    }

    onChatBoxMinimized(title) {
        this.ChatBoxes.onChatBoxMinimized(title);
    }

    onChatBoxMaximized(title) {
        this.ChatBoxes.onChatBoxMaximized(title);
    }

    onChatBoxBlur(title) {
        this.ChatBoxes.onChatBoxBlur(title);
    }
}

commonModule.controller('ChatboxController', ChatboxController);

export default commonModule;
