//https://codingblast.com/chat-application-angular-socket-io/
let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.emit('new-message', 'hello world' );

    socket.on('new-message', (message) => {
        io.emit(message);
        console.log(message);
        socket.emit('new-message', message );
    });

    // Success!  Now listen to messages to be received
	// socket.on('new-message',function(event){ 
	// 	console.log('Received message from client!',event);
    // });
    
    socket.on('disconnect',function(){
		clearInterval(interval);
		console.log('Server has disconnected');
    });
    
    // Create periodical which ends a message to the client every 5 seconds
    var interval = setInterval(function() {
        socket.send('server: ' + new Date().getTime());
        console.log('sent' + new Date().getTime());
    },5000);

    socket.send('server loaded');
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
