import commonModule from '../../../commonModule';

/**
 * @ngdoc provider
 * @name ChatProvider
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description
 *
 */
class ChatBoxProvider {
    constructor() {
        this.chatBoxes = [];
        this.chatBoxesVisibles = 0;
        this.chatboxPrefix = "chatbox_";
    }

    /*ngInject*/
    $get($document, $rootScope, lodash, $q, $compile) {
        let _ = lodash;

        return {
            show: (selector) => {
                if (angular.element(selector)) {
                    angular.element(selector).show();
                }
            },
            hide: (selector) => {
                if (angular.element(selector)) {
                    angular.element(selector).hide();
                }
            },
            create: (title) => {
                let selector = "#" + this.chatboxPrefix + title;
                if ($(selector).length > 0) {
                    if ($(selector).css('display') == 'none') {
                        $(selector).css('display', 'block');
                        //restructureChatBoxes();
                    }
                    $("#tfInput_" + title).focus();
                    return;
                }

                let template = angular.element('<chatbox title="' + title + '"></chatbox>');
                let chatboxExist = $document.find(selector);
                //Check exist mask in DOM
                if (!chatboxExist.length) {
                    let compileTpl = $compile(template)($rootScope);
                    $document.find('body').prepend(compileTpl);
                }
                $(selector).css('bottom', '0px');
                for (x in this.chatBoxes) {
                    if ($(selector + this.chatBoxes[x]).css('display') != 'none') {
                        this.chatBoxesVisibles++;
                    }
                }
                console.log("this.chatBoxesVisibles", this.chatBoxesVisibles)
                if (this.chatBoxesVisibles == 0) {
                    $(selector).css('right', '20px');
                } else {
                    let width = (this.chatBoxesVisibles) * (225 + 7) + 20;
                    $(selector).css('right', width + 'px');
                }
                this.chatBoxes.push(title);
                if (angular.element(selector)) {
                    angular.element(selector).show();
                }
            }
        };
    }
}

commonModule.provider('ChatBoxes', ChatBoxProvider);

export default commonModule;
