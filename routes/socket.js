module.exports = function(io) {

  console.log("socket imported.");
  /*
  Events
    connect
      - on connect add person to lobby. decksize++
    disconnect
      - on disconnect remove person and decksize--
    draw card
      - only if this person hasn't before this turn
    give card
      - the card the client was given.
    start game
      -
    accuse (person)
    guess (spy)
  */

  io.on('connection', function(socket) {
    var person = socket;

    socket.on('draw card', function() {
      socket.emit('give card');
    })

    socket.on('chat message', function(msg) {
      io.emit('chat message', msg);
    });
  });

}
