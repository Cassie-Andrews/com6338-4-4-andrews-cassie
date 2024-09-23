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

  // STARTING GAME STATE
  document.getElementById('word-to-guess').textContent = '_'.repeat(wordToGuess.length); // display one _ for each letter
  document.getElementById('previous-word').textContent = ''; //placeholder
  document.getElementById('incorrect-letters').textContent = ''; //placeholder
  document.getElementById('remaining-guesses').textContent = remainingGuesses; //start at 10
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  // event listener here? or just use document.onkeyup to access user key presses like in lecture? ;
}


document.onkeyup = whenKeyPressed;

function whenKeyPressed(e) { // access user's keypress
  var letter = e.key.toUpperCase(); // key press converts to uppercase

  // note: if user presses non-letter key or incorrect letter key repeatedly, there should be NO changes to the game state.

  // Check if key press is a letter
  if (!/^[A-Z]$/.test(letter)) { // !=not ^=start of string [A-Z]=uppercase letter $=end of string
    return; // if key press is not a letter, do nothing
  }
  console.log(letter) // test

  // Check if letter has been guessed 
  if (incorrectLetters.includes(letter) || document.getElementById('word-to-guess').textContent.includes(letter)) {
    return; // if letter found in the wordToGuess text OR incorrectLetters, do nothing
  }

  // if keypress is a letter AND letter has not been guessed then check if it is in the wordToGuess
  var letterFound = false;
  var displayedWord = document.getElementById('word-to-guess').textContent.split(''); // use split('') to convert string to an array to target each character
  console.log(displayedWord)

  // When the user presses a letter key, your code should loop to compare picked letter with word's letters
  for (var i=0; i < wordToGuess.length; i++) { // for loop iterates over the letters [i] in the wordToGuess
    if (wordToGuess[i] === letter) { // if a character in the wordToGuess matches the user's key press
      letterFound = true; // then letterFound = true for each occurance of the letter
      console.log(letterFound);
      displayedWord[i] = letter; // corresponding _ in displayedWord will change to the correctly guessed letter
    }
  }

  // if letter entered was CORRECT
  if (letterFound) { 
    document.getElementById('word-to-guess').textContent = displayedWord.join(''); // The letter should replace the underscores in the wordToGuess with all instances of that letter. Join() to put array back into a string with the updated letter(s).

      // CHECK FOR WIN:
      // if the user guesses the last letter CORRECTLY there will be no more _ in the displayedWord (use ! for 'not')
      if (!displayedWord.includes('_')) { 
        wins++; // count +1 to wins
        console.log(wins, "wins"); // test
        document.getElementById('wins').textContent = wins; // display '1' in the #WINS element
      }
  
  // if letter entered was INCORRECT        
  } else {
    // the incorrectly-guessed letter should be added to the #incorrect-letters element 
    incorrectLetters.textContent = letter;
      // the #remaining-guesses element should reflect one fewer remaining guess
      //// remainingGuesses.textContent = remainingGuesses--;
      // CHECK FOR LOSS: if remaining guesses=0 then the user LOST
         // 1. count a LOSS
         // 2. display '1' in the #LOSSES element.
  } 
      // when the game ends from an incorrect final guess (LOSS) OR a correct final guess (WIN) it should RESET
         // 3. The game should immediately proceed to the next randomly-chosen word
         // 4. the game should reset the following elements: 
         // 4a incorrect letters should be blank
         // 4b remaining guesses should show '10'
         // 4c the #previous-word element should display the previous word
  
}


  
  
