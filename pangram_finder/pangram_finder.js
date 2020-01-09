const PangramFinder = function(phrase) {
  this.phrase = phrase;
  this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
};

PangramFinder.prototype.isPangram = function() {
  let characterArray = this.phrase.split("");
  const cleanedArray = characterArray.map(letter => {
    return letter.toLowerCase();
  });
  const letterCheck = this.alphabet.every(value =>
    cleanedArray.includes(value)
  );
  return letterCheck;

  //solution return this.alphabet.every(letter => this.phrase.includes(letter))
};

module.exports = PangramFinder;
