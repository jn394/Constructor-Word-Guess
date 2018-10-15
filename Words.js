var Letters = require("./Letters");

var myArray = [];

function Words(word) {
    this.word = word;

    for (var i = 0; i < word.length; i++) {
        myArray.push(new Letters())
    }

};

module.exports = Words;