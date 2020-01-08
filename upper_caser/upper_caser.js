const UpperCaser = function (wordArray) {
    this.wordArray = wordArray;
}

UpperCaser.prototype.toUpperCase = function () {
    return this.wordArray.map(word => word.toUpperCase())
}

module.exports = UpperCaser;
