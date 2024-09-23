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
];

// NO EDITS ABOVE THIS POINT! //


var wordToGuess = '';
var remainingGuesses = 10;
var incorrectLetters = [];
var wins = 0;
var losses = 0;

window.onload = startGame;

function startGame() {
  /*** When the page loads, your code should select a word at random from the provided words array and place it in the #word-to-guess element with its letters replaced with underscores. */
  wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log("Word to guess:", wordToGuess);
  console.log("Number of letters:", wordToGuess.length);
  remainingGuesses = 10;
  console.log("Guesses remaining:", remainingGuesses);
  /** The game should also display ten remaining guesses in the #remaining-guesses element. */ 
  incorrectLetters = [];

  // references for elements in HTML doc
  document.getElementById('word-to-guess').textContent = '_'.repeat(wordToGuess.length); // display one _ for each letter
  document.getElementById('previous-word').textContent = ''; //placeholder
  document.getElementById('incorrect-letters').textContent = ''; //placeholder
  document.getElementById('remaining-guesses').textContent = remainingGuesses; //start at 10
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  // do i need an event listener here? or do i just use document.onkeyup to access user key presses? ;
}


document.onkeyup = whenKeyPressed;

function whenKeyPressed(e) { // access user's keypress
  var letter = e.key.toUpperCase(); // key press converts to uppercase


// requirement: if the user presses a non-letter key or an incorrect letter key repeatedly, there should be NO changes to the game state.
/*** if the keypress is NOT a letter then do nothing */
  if (!/^[A-Z]$/.test(letter)) { // !=not ^=start of string [A-Z]=uppercase letter $=end of string
    return;
  }
  console.log(letter) // test
// check if letter has been guessed already - if it is in the word or in the incorrect letters section
  if (incorrectLetters.includes(letter) || document.getElementById('word-to-guess').textContent.includes(letter)) {
    return;
  }

/*** if keypress is a letter and letter has not been guessed then check if it is in the wordToGuess */
  var letterFound = false;
  var displayedWord = document.getElementById('word-to-guess').textContent.split(''); // convert string to an array to target each character
  console.log(displayedWord)
  /** When the user presses a letter key, your code should loop to compare picked letter with word's letters */
  for (var i=0; i < wordToGuess.length; i++) { //for loop iterates over the letters [i] in the wordToGuess
    if (wordToGuess[i] === letter) { //if a character in the wordToGuess matches the user's key press
      letterFound = true; //then letterFound = true for each occurance of the letter
      console.log(letterFound);
      displayedWord[i] = letter; //_ change to letter
    }
  }

  if (letterFound) { // If the user guessed a letter CORRECTLY
    document.getElementById('word-to-guess').textContent = displayedWord; // The letter should replace the underscores in the wordToGuess with all instances of that letter.
  } else { // Otherwise (letter guessed INCORRECTLY)
    // the #word-to-guess element should remain unchanged
    incorrectLetters.textContent = letter; // the incorrectly-guessed letter should be added to the #incorrect-letters element
  // the #remaining-guesses element should reflect one fewer remaining guess.
    remainingGuesses.textContent = remainingGuesses--
  } 


}
  /** if the letter is CORRECT */

  
/*** ACTION: 
   * If the letter is CORRECT...
      * the letter should replace the underscores in the displayed word (displayed in the #word-to-guess element) with all instances of that letter. 
   * If the letter is INCORRECT...

            ////remainingGuesses.textContent = remainingGuesses; // display remaining guesses
           ////console.log(remainingGuesses)

/*** ACTION: If the user selects the last letter in the word CORRECTLY the game should...
   * 1. count a WIN
   * 2. display '1' in the #WINS element.
   * 3. The game should immediately proceed to the next randomly-chosen word
   * 4. the game should reset all of the other elements: 
   * 4a incorrect letters should be blank
   * 4b remaining guesses should show '10'
   * 4c the #previous-word element should display the previous word */

/*** ACTION: If the user runs out of guesses WITHOUT GUESSING THE WORD the game should...
 * 1. count a LOSS
 * 2. display '1' in the #LOSSES element.
 * 3. The game should immediately proceed to the next randomly-chosen word
 * 4. The game should reset all of the other elements:
 * 4a incorrect letters should be blank
 * 4b remaining guesses should show 10
 * 4c the #previous-word element should display the previous word */
  
  
