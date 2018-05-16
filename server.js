var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected.');
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    
    socket.on('chat message', function(msg){
        console.log('message: ', msg);
        io.emit('chat message', msg);
    });
});

server.listen(8080, function(){
    console.log('Listening on *:8080...');
    
});