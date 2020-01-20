var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);


server.listen(process.env.PORT || 3000);

app.use(express.static("public"));

var connected_users = 0;

io.sockets.on('connection', function(socket) {

    console.log("Client connected.");
    console.log("Clients: " + ++connected_users);
    
    socket.on('play_cards', function(data) {
    
        //console.log(data);
        socket.broadcast.emit('play_cards', data);
    
    });







    socket.on('disconnect', function(socket) {
    
        console.log("Client disconnected.");
        console.log("Clients: " + --connected_users);
    
    });

});










