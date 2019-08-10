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

    //Change HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //Testing and debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    //Check if letter exists in code
    console.log(letter);
    var isLetterInWord = false;

    for (var i =0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    // Check where in word letter exists, then add to blanksAndSuccesses array:

    if(isLetterInWord) {
        for (var i = 0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    //Wrong answer
    else {
        wrongLetters.push(letter);
        guessesLeft--  
        //!!!!!Fixed problem with guessesLeft: keystrokes became undefined when used- narrowed problem down to this spot through sectioning and found typo.
    }
    //Testing and debugging
    console.log(blanksAndSuccesses);
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    //Update the HTML to reflect the most recent count
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
   document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    //Check if user won
    if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You won! What a wordsmith!");

        //Update win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    //Check if user lost
    else if (guessesLeft == 0) {
        lossCount++
        alert("You lost!");

        //Update HTML to show loss
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }

}

//MAIN PROCESS
//-----------------------------------------------------

//Initiates the code the first time
startGame();

//Register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete(); 

    //Testing and debugging
    console.log(letterGuessed);
}