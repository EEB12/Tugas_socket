var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// const $messagesContainer = document.getElementById('messagesContainer')
app.use(express.static(__dirname + '/public'));
const {joinUser, removeUser, findUser} = require('./user');

var port = 3000;
http.listen(port, function() {
	    console.log('Server running on port ' + port);
});

io.on('connection', function (socket) {
	
	socket.on("join", (data) => {
		console.log('in room');
		console.log(data);
      let Newuser = joinUser(socket.id, data.username)
      
      socket.emit('send data' , {id : socket.id ,username:Newuser.username });
     
      thisRoom = 1;
      console.log(Newuser);
      socket.join(Newuser.roomname);
	  
	  socket.broadcast.emit("passCheck",data);

	  });
	socket.on('draw', function (data) {
		// console.log("tes")
		socket.broadcast.emit('draw', data);
	});

	socket.on('chat message', (msg) => {
		// console.log(msg.user+" : "+msg.value);
		// thisRoom = msg.room;
		// io.to(thisRoom).emit("chat message ", {msg:msg});
		// // // $messagesContainer.innerHTML +=
        // // // `<div class="chat-message">
        // // //     <span style="color: red; font-weight: bold;">${na}:</span> <span class="msg">${message}</span>
        // // </div>`
		// // const $messagesContainer = document.getElementById('messagesContainer')
		// // 			console.log(msg.user+" : "+msg.value);
					
					
		// // 			$messagesContainer.innerHTML +=
		// // 			`<div class="chat-message">
		// // 			    <span style="color: red; font-weight: bold;">${msg.user}:</span> <span class="msg">${msg.value}</span>
		// // 			</div>`
		console.log('chat message', msg)
		
		// Broadcast to everyone else (except the sender)
		socket.broadcast.emit('msg', {
			from: msg.user,
			message: msg.value
		})
		// Send back the same message to the sender
		socket.emit('msg', {
			from: msg.user,
			message: msg.value
		})
		
	  });
});
