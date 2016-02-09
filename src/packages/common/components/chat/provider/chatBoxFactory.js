import commonModule from '../../../commonModule';

class ChatBoxesFactory {

    constructor($document, $rootScope, lodash, $compile) {
        this.chatBoxes = [];
        this.chatBoxesVisibles = 0;
        this.chatboxPrefix = "chatbox_";
        this.iconClsMaximize = "fa-plus";
        this.iconClsMinimize = "fa-minus";
        this.chatBoxWidth = 250;
        this.$document = $document;
        this.$rootScope = $rootScope;
        this._ = lodash;
        this.$compile = $compile;
    }

    /*ngInject*/
    static instance($document, $rootScope, lodash, $compile) {
        return new ChatBoxesFactory($document, $rootScope, lodash, $compile);
    }

    create(title, minimizeChatBox = false) {
        let selector = "#" + this.chatboxPrefix + title;
        if ($(selector).length > 0) {
            if ($(selector).css('display') == 'none') {
                $(selector).css('display', 'block');
                this.restructureChatBoxes();
            }
            return;
        }
        let template = angular.element('<chatbox title="' + title + '"></chatbox>');
        let chatboxExist = this.$document.find(selector);
        let element;
        ////Check exist chatbox in DOM
        if (!chatboxExist.length) {
            element = this.$compile(template)(this.$rootScope);
            this.$document.find('body').prepend(element);
        } else {
            element = chatboxExist;
        }
        //Init chat box to create
        this.initChatBox(element, title, minimizeChatBox);
        if (element) {
            element.show();
        }
    }

    initChatBox(element, title, minimizeChatBox) {
        let selector = "#" + this.chatboxPrefix + title;
        element.css('bottom', '0px');
        for (let chatbox in this.chatBoxes) {
            if ($(selector + this.chatBoxes[chatbox].title).css('display') != 'none') {
                this.chatBoxesVisibles++;
            }
        }
        if (this.chatBoxesVisibles == 0) {
            element.css('right', '20px');
        } else {
            let width = (this.chatBoxesVisibles) * (this.chatBoxWidth + 7) + 20;
            element.css('right', width + 'px');
        }
        var chatbox = {
            title: title,
            minimized: false,
            maximized: true,
            focused: false
        };

        this.chatBoxes.push(chatbox);
        if (minimizeChatBox) {
            this.onChatBoxMinimizedElement(element, title);
        }
    }

    restructureChatBoxes() {
        let align = 0;
        for (let chatbox in this.chatBoxes) {
            let chatboxtitle = this.chatBoxes[chatbox].title;
            let selector = "#" + this.chatboxPrefix + chatboxtitle;
            if ($(selector).css('display') != 'none') {
                if (align == 0) {
                    $(selector).css('right', '20px');
                } else {
                    let width = (align) * (this.chatBoxWidth + 7) + 20;
                    $(selector).css('right', width + 'px');
                }
                align++;
            }
        }
    }

    closeChatBox(chatboxtitle) {
        $("#" + this.chatboxPrefix + chatboxtitle).css('display', 'none');
        this.restructureChatBoxes();
    }

    onChatBoxBlur(title) {
        let chatbox = this.getChatBoxByTitle(title);
        chatbox.focused = false;
    }

    onChatBoxMinimizedElement(element, title) {
        element.find('div.chatboxcontent').css('display', 'none');
        element.find('.box-footer').css('display', 'none');
        element.find('button[data-role="maxmin"]').find('i').removeClass(this.iconClsMinimize).addClass(this.iconClsMaximize);
        let chatbox = this.getChatBoxByTitle(title);
        chatbox.minimized = true;
        chatbox.maximized = false;
    }

    onChatBoxMinimized(title) {
        let element = $("#" + this.chatboxPrefix + title);
        this.onChatBoxMinimizedElement(element, title);
    }

    onChatBoxMaximized(title) {
        let element = $("#" + this.chatboxPrefix + title);
        element.find('div.chatboxcontent').css('display', 'block');
        element.find('.box-footer').css('display', 'block');
        element.find('button[data-role="maxmin"]').find('i').removeClass(this.iconClsMaximize).addClass(this.iconClsMinimize);
        let chatbox = this.getChatBoxByTitle(title);
        chatbox.minimized = false;
        chatbox.maximized = true;
    }

    getChatBoxByTitle(title) {
        return this._.find(this.chatBoxes, function (chatbox) {
            return chatbox.title === title;
        })
    }

    show(selector) {
        if (angular.element(selector)) {
            angular.element(selector).show();
        }
    }

}

commonModule.factory('ChatBoxes', ChatBoxesFactory.instance);

export default commonModule;
