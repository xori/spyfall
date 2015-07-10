
function Deck() {
  this.maxCards = 0;
  this.cards = [];
  this.active = [];
}

Deck.prototype.cut = function(number) {
  // cards.length >= number
  var self = this;
  for(var i = 0; i < this.cards.length; i++)
    self.cards[i]._order = Math.random();
  self.cards.sort(function(a,b) {
    return b._order - a._order;
  })
  for(var i = 0; i < number; i++)
    self.active.push(self.cards[i]);
}

/***
 * Deal a card from the active deck and remove it from active.
 * If the active deck is empty (someone joined last minute) then
 * just deal one from the large deck. Taken the risk of two spies
 */
Deck.prototype.deal = function() {
  if(this.active.length === 0) {
    return this.cards[Math.random() * this.cards.length];
  }
  var index = Math.floor(Math.random() * this.active.length);
  return this.active.splice(index, 1);
}

module.exports = Deck;
