//GLOBAL VARIABLES
//----------------------------------------------------
//Arrays and variables for holding data
var wordOptions = ["tiger", "cheetah", "llama", "sloth", "goat", "chipmunk", "kitten"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS
//----------------------------------------------------

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    //Reset
    guessesLeft = 9
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks.
    for (var i = 0; i <numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //Testing and debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}


//MAIN PROCESS
//-----------------------------------------------------
startGame();