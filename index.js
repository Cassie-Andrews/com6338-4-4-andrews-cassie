var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

// NO EDITS ABOVE THIS POINT //


/* When the page loads, your code should select a word at random from the provided words array and place it in the #word-to-guess element with its letters replaced with underscores. */

// The game should also display ten remaining guesses in the #remaining-guesses element.


/* When the user presses a letter key, your code should check whether the letter is included in the word. 

If the letter is included, it should replace the underscores in the displayed word (displayed in the #word-to-guess element) with the instances of that letter. 

If the letter is not included, the #word-to-guess element should remain unchanged, but the incorrectly-guessed letter should be added to the #incorrect-letters element and the #remaining-guesses element should reflect one fewer remaining guess. */

/* When the user presses the last correct letter, the game should count a win and display '1' in the #wins element. The game should immediately proceed to the next randomly-chosen word and reset all of the other elements: incorrect letters should be blank, remaining guesses should show '10', and the #previous-word element should display the previous word 

 if the user had run out of remaining guesses before guessing the word, the game would also proceed to the next game and show an increase in losses instead of wins. */



var wordToGuessEl  = document.getElementById('word-to-guess')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
