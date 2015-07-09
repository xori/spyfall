module.exports = function(io) {
    
    console.log("socket imported.");
    
    io.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            io.emit('chat message', msg);
        });
    });

}