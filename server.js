var app = require('express')();
var server = require('http').Server(app);

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
});

server.listen(8080, function(){
    console.log('Listening on *:8080...');
    
});