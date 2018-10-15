var Letter = function (letter) {
    this.letter = letter
    this.state = false;

    this.makeLine = function () {
        if (!this.state) {
            return "_";
        }
        return this.letter;
    };
    this.letterCheck = function (guess) {
        if (guess === this.letter) {
            this.state = true;
        };
    }
};

module.exports = Letter;