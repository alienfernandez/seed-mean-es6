import commonModule from '../../../commonModule';

class ChatboxController {

    /*ngInject*/
    constructor(ChatBoxes) {
        console.log("ChatBoxes", ChatBoxes)
        this.ChatBoxes = ChatBoxes;
    }

    closeChatBox(title) {
        this.ChatBoxes.closeChatBox(title);
    }
}

commonModule.controller('ChatboxController', ChatboxController);

export default commonModule;
