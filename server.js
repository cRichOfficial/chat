var app = require('express')();
var server = require('http').Server(app);

app.get('/', function(req, resp){
    resp.send('<h1>Hello World!</h1>');
});

server.listen(8080, function(){
    console.log('Listening on *:8080...');
    
});