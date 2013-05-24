var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);
app.use(require('express').static(__dirname));
app.use(require('express').bodyParser());


io.on('connection', function(socket){
	console.log('client connected');
  socket.on('sendMsg', function (data) {
      console.log('Chat message by ', data.nickname, ' : ', data.message);
	socket.broadcast.emit('newMsg', data);
    });
});
