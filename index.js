var words = [
  'bananas', //0
  'grapes', //1
  'carousel', //2
  'milkshake', //3
  'javascript', //4
  'limousine', //5
  'chocolate', //6
  'programming', //7
  'meatloaf', //8
  'ukulele', //9
  'mango' //10
]

// NO EDITS ABOVE THIS POINT //






/* If the letter is included, it should replace the underscores in the displayed word (displayed in the #word-to-guess element) with the instances of that letter. 

If the letter is not included, the #word-to-guess element should remain unchanged, but the incorrectly-guessed letter should be added to the #incorrect-letters element and the #remaining-guesses element should reflect one fewer remaining guess. */

/* When the user presses the last correct letter, the game should count a win and display '1' in the #wins element. The game should immediately proceed to the next randomly-chosen word and reset all of the other elements: incorrect letters should be blank, remaining guesses should show '10', and the #previous-word element should display the previous word 

if the user had run out of remaining guesses before guessing the word, the game would also proceed to the next game and show an increase in losses instead of wins. */




// should display _ for each letter to start


// 5:10 in lecture uses "score" element id and then global variables = 0 for "correct" and "incorrect"

var wordToGuess = '';
var remainingGuesses = 10;
var incorrectLetters = [];
var wins = 0;
var losses = 0;

window.onload = startGame;
/* When the page loads, your code should select a word at random from the provided words array and place it in the #word-to-guess element with its letters replaced with underscores. */


function startGame() {
  // pick a random word from the words array
  wordToGuess = words[Math.floor(Math.random() * words.length)]; // calc # of letters in wordToGuess
  console.log(wordToGuess)
  console.log(wordToGuess.length) 
  remainingGuesses = 10;
  // should display 10 guesses at game start
  incorrectLetters = [];

  document.getElementById('word-to-guess').textContent = '_'.repeat(wordToGuess.length); // display one _ for each letter
  document.getElementById('previous-word').textContent = '';
  document.getElementById('incorrect-letters').textContent = incorrectLetters;
  document.getElementById('remaining-guesses').textContent = remainingGuesses;
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;

  document.addEventListener('keyup', analyzeKeyUp);
}

// only allows letters to be input, case does not matter

function analyzeKeyUp(e) {
  // access user's keypress
  var letter = e.key;
  console.log(letter.toUpperCase())
  
  // if key pressed is a letter
  if (!/^[A-Za-z]+$/.test(letter)) {  
 
  }
  // When the user presses a letter key, your code should check whether the letter is included in the word. 
    // if key pressed is a letter AND letter is correct
    if (wordToGuess.includes(letter)) {
      for (i=0; i < wordToGuess.length; i++) { // loop to compare picked letter with word's letters

        // ** need to show correct letter in wordToGuessDisplay
        // display remaining guesses
        //need to display correct letter in the word instead of _
      }
    } else {
        // increment and show incorrect letter
        (remainingGuesses)-- //-1 guess remgaining
        remainingGuesses.textContent = remainingGuesses; // display remaining guesses
        console.log(remainingGuesses)
        incorrectLetters.textContent = e.key //shows last letter guessed
        // ** troubleshoot - want to keep all previous incorrect letter guesses on display
    }

    // show previous word
    // show number of wins/losses
    // The game should also display ten remaining guesses in the #remaining-guesses element.


    // if key pressed is NOT a letter
  }
  
