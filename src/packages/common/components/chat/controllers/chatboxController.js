import commonModule from '../../../commonModule';

class ChatboxController {

    /*ngInject*/
    constructor(ChatBoxes) {
        //console.log("ChatBoxes", ChatBoxes);
        this.ChatBoxes = ChatBoxes;
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
