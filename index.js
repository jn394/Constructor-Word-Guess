var inquirer = require("inquirer");

var Words = require("./Words");


inquirer.prompt([
    {
        name: "letter",
        message: "Guess a letter?"
    }

]).then(function (answers) {

    var les = new Letter();

    les.makeLine("r", answers.letter);
});