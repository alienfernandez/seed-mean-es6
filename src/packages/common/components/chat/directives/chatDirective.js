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
            <div class="box box-success direct-chat direct-chat-success">
                <div class="box-header with-border" id="id_{{title}}">
                    <h4 class="box-title">{{title}}</h4>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool">
                            <i class="fa fa-cogs"></i></button>
                        <button type="button" class="btn btn-box-tool" ng-click="chatboxCtrl.onChatBoxToggle(title)"
                            data-role="maxmin">
                            <i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" ng-click="chatboxCtrl.closeChatBox(title)">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body" style="display: block;">
                    <!-- Conversations are loaded here -->
                    <div class="direct-chat-messages chatboxcontent" id="chat_content_{{title}}">
                        <!-- Message. Default to the left -->
                        <div class="direct-chat-msg">
                            <div class="direct-chat-info clearfix">
                                <span class="direct-chat-name pull-left">Alexander Pierce</span>
                                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                            </div>
                            <!-- /.direct-chat-info -->
                            <img class="direct-chat-img" src="http://placehold.it/128x128" alt="message user image"><!-- /.direct-chat-img -->
                            <div class="direct-chat-text">
                                Is this template really for free? That's unbelievable!
                            </div>
                            <!-- /.direct-chat-text -->
                        </div>
                        <!-- /.direct-chat-msg -->

                        <!-- Message to the right -->
                        <div class="direct-chat-msg right">
                            <div class="direct-chat-info clearfix">
                                <span class="direct-chat-name pull-right">Sarah Bullock</span>
                                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                            </div>
                            <!-- /.direct-chat-info -->
                            <img class="direct-chat-img" src="http://placehold.it/128x128" alt="message user image"><!-- /.direct-chat-img -->
                            <div class="direct-chat-text">
                                You better believe it!
                            </div>
                            <!-- /.direct-chat-text -->
                        </div>
                        <!-- /.direct-chat-msg -->

                        <!-- Message. Default to the left -->
                        <div class="direct-chat-msg">
                            <div class="direct-chat-info clearfix">
                                <span class="direct-chat-name pull-left">Alexander Pierce</span>
                                <span class="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                            </div>
                            <!-- /.direct-chat-info -->
                            <img class="direct-chat-img" src="http://placehold.it/128x128" alt="message user image"><!-- /.direct-chat-img -->
                            <div class="direct-chat-text">
                                Working with AdminLTE on a great new app! Wanna join?
                            </div>
                            <!-- /.direct-chat-text -->
                        </div>
                        <!-- /.direct-chat-msg -->
                    </div>
                    <!--/.direct-chat-messages-->
                    <!-- /.direct-chat-pane -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer" style="display: block;">
                    <form action="#" method="post">
                        <div class="input-group">
                            <input type="text" name="message" placeholder="Type Message ..."
                                   class="form-control chatboxtextarea"
                                   ng-blur="chatboxCtrl.onChatBoxBlur(title)">
                                  <span class="input-group-btn">
                                    <button type="button" class="btn btn-xs btn-success btn-flat">Send</button>
                                  </span>
                        </div>
                    </form>
                </div>
                <!-- /.box-footer-->
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
