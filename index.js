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


/* When the page loads, your code should select a word at random from the provided words array and place it in the #word-to-guess element with its letters replaced with underscores. */

// The game should also display ten remaining guesses in the #remaining-guesses element.


/* When the user presses a letter key, your code should check whether the letter is included in the word. 

If the letter is included, it should replace the underscores in the displayed word (displayed in the #word-to-guess element) with the instances of that letter. 

If the letter is not included, the #word-to-guess element should remain unchanged, but the incorrectly-guessed letter should be added to the #incorrect-letters element and the #remaining-guesses element should reflect one fewer remaining guess. */

/* When the user presses the last correct letter, the game should count a win and display '1' in the #wins element. The game should immediately proceed to the next randomly-chosen word and reset all of the other elements: incorrect letters should be blank, remaining guesses should show '10', and the #previous-word element should display the previous word 

 if the user had run out of remaining guesses before guessing the word, the game would also proceed to the next game and show an increase in losses instead of wins. */



var wordToGuess = document.getElementById('word-to-guess') // should display _ for each letter to start
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

var remainingGuesses = 10
var correct = 0
var incorrect = 0
// 5:10 in lecture uses "score" element id and then global variables = 0 for "correct" and "incorrect"

window.onload = function(chooseRandomWord) {
  // randomly choose a word from the words array
  randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log(randomWord)

  // display one _ for each letter
  wordToGuess.textContent = ('_'.repeat(randomWord.length)); // ** looks right but not passing test
  remainingGuessDisplay.textContent = '10'; // ** looks right but not passing test
}


// should display 10 guesses at game start

var letters = /^[A-Za-z]+$/
// only allows letters to be input, case does not matter


document.onkeyup = function(e) {
  // do nothing when pressing invalid key - filter keypresses
  var key = e.key
  if (e.key.match(letters))
  console.log(e.key) // access user's keypress

  console.log(randomWord)  // pick a random word from the words array
  
  if (randomWord.includes(key)) {  // compare picked letter with word's letters
      // increment correct
      remainingGuesses-- // -1 guess remaining
      console.log(remainingGuesses) 
      // ** need to display remaining guesses
      //need to display correct letter in the word instead of _
  } else {
      // increment and show incorrect letter
      remainingGuesses-- //-1 guess remaining
      console.log(remainingGuesses) 
      // ** need to display remaining guesses
      incorrectLettersEl.textContent = key //shows last letter guessed
      // ** troubleshoot above - currently will display all characters, not just letters
      // ** troubleshoot - want to keep all previous incorrect letter guesses on display
  }

  // show previous word
  // show number of wins/losses
  // show remianing guess out of 10
}