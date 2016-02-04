import commonModule from '../../../commonModule';

/**
 * @ngdoc directive
 * @name ChatDirective
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description
 *
 */
class ChatDirective {
    constructor() {

        let tpl = `
            <div class="chatbox" id="chatbox_{{title}}">
                <div class="panel panel-primary">
                    <div id="id_{{title}}" class="panel-heading">
                        <i class="fa fa-comments fa-fw"></i>
                        {{title}}
                        <div class="pull-right">
                            <button type="button" class="btn btn-danger btn-xs btn-circle-xs" ng-click="chatboxCtrl.closeChatBox(title)">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div id="chat_content_{{title}}" class="panel-body chatboxcontent">
                        <ul class="chat">

                        <ul>
                    </div>
                    <div class="panel-footer">
                        <div class="input-group">
                            <input id="tfInput_{{title}}" type="text" class="form-control input-sm" placeholder="Type your message..." />
                            <span class="input-group-btn">
                                <button class="btn btn-warning btn-sm" id="btn-chat">Send</button>
                            </span>
                        </div>
                    </div>
                </div>
			</div>`;

        let directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            controller: 'ChatboxController',
            controllerAs: 'chatboxCtrl',
            template: tpl,
            link: this.link
        };

        return directive;
    }

    link($scope, element, $attrs) {
        console.log("element", element)
        console.log("$scope", $scope)
        $scope.title = $attrs.title;
        element.prependTo('body');
    }
}

commonModule.directive('chatbox', () => new ChatDirective());

export default commonModule;
