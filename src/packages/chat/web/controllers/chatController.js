import chatModule from '../../chatModule';

class ChatController {

    /*ngInject*/
    constructor($scope, $location, Socket, AuthenticationService) {
        this.$location = $location;
        this.Socket = Socket;
        this.AuthenticationService = AuthenticationService;
        // Create a messages array
        this.messages = [];

        // If user is not signed in then redirect back home
        if (!this.AuthenticationService.user) {
            $location.path('/');
        }

        // Make sure the Socket is connected
        if (!this.Socket.socket) {
            this.Socket.connect();
        }
        // Add an event listener to the 'chatMessage' event
        this.Socket.on('chatMessage', (message) => {
            this.messages.unshift(message);
        });
        // Remove the event listener when the controller instance is destroyed
        $scope.$on('$destroy', () => {
            this.Socket.removeListener('chatMessage');
        });
    }

    sendMessage() {
        // Create a new message object
        let message = {
            text: this.messageText
        };

        // Emit a 'chatMessage' message event
        this.Socket.emit('chatMessage', message);

        // Clear the message text
        this.messageText = '';
    }

}

chatModule.controller('ChatController', ChatController);

export default chatModule;
