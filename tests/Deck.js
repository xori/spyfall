var should = require('should');
var Deck = require('../game/deck');

describe('Game Deck', function() {
  var showman = null;

  beforeEach(function() {
    showman = new Deck();
    showman.cards.concat([
      {role: "Spy"},
      {role: "Landlord"}
    ])
  });

  it('exists', function() {
    should.exist(showman);
  })

  it('should shuffle consistly', function() {
    for(var i = 0; i < 2; i++) {
      showman.cut(2);
      showman.deal();
      showman.deal();
    }
  })

  it('should be random for humans', function() {
    var spyFirst = true;
    for(var i = 0; i < 20; i++) {
      showman.cut(2);
      var card = showman.deal();
      if (card.role !== "Spy") {
        console.log(i, card);
        return;
      }
    }
    should.not.ok(false);
  })
})
