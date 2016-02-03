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
                            <button type="button" class="btn btn-default btn-xs" ng-click="closeChatBox('title')">
                                <i class="fa fa-sign-out"></i>
                            </button>
                        </div>
                        <div class="btn-group pull-right">
                            <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu slidedown"><li><a href="#"><i class="fa fa-refresh fa-fw"></i> Refresh</a></li><li><a href="#"><i class="fa fa-check-circle fa-fw"></i> Available</a></li><li><a href="#"><i class="fa fa-times fa-fw"></i> Busy</a></li><li><a href="#"><i class="fa fa-clock-o fa-fw"></i> Away</a></li></ul>
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
            scope: {
                //title: '='
            },
            template: tpl,
            link: this.link
        };

        return directive;
    }

    link($scope, element, $attrs) {
        console.log("$scope", $scope)
        console.log("element", element)
        console.log("$attrs", $attrs)
        $scope.title = $attrs.title;
        element.prependTo('body');
        //$("#chatbox_"+chatboxtitle).css('bottom', '0px');
    }
}

commonModule.directive('chatbox', () => new ChatDirective());

export default commonModule;
