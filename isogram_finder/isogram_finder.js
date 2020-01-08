const IsogramFinder = function (word) {
    this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
    const cleanedArray = this.word.map((letter) => {
        return letter.toLowerCase();
    });

    const checkRepeats = arr => arr.filter((item, index) => arr.indexOf(item) != index);

    const result = checkRepeats(cleanedArray);
    if (result.length > 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = IsogramFinder;
