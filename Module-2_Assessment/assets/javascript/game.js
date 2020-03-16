// Words array for FOOD THEME
var wordsList = [
'orange', 
'apple', 
'pizza', 
'banana', 
'broccoli', 
'milk', 
'muffin', 
'cake', 
'corn', 
'potato'
];
var answrArray=[];


// Loops the game
while(remainingLetters > 0){
    alert(answrArray.join(" ")); // alerts of the player of their progress by using the join property to join charcaters of the string

    var guess = prompt('Please begin the game by guessing a letter'); // Must ensure the user inputs a single character
    if (guess === null) {
        break;
    } 
    // ensures that guess is exactly one letter
    else if (guess.length !== 1){
        alert("Enter a single letter.");
    }
    // Update the answrArray
    else{
      for(var k=0; k < wordList.length; k++){
          if(wordList[k]===guess){
              answrArray[k]=guess;
              remainingLetter--; // decrement a letter in answer array 
          }
        }
      }        
      alert(answerArray.join(" "));
      alert("Good job! The answer was " + word);
    }

    
    var answerArray = setupAnswerArray(word);

    /* RemainingLetters used to keep track
of how many letters are left to be guessed. Every time the player
guesses a correct letter, this value will be decremented by 1 */

    var remainingLetters=wordList.length;

    var pickWord = function () {
        // picks a random word from the word array
        var wordList=wordsList[Math.floor(Math.random() * word.length)];
    };
    
    var setupAnswerArray = function (wordsList) {
    // Return the answer array
  

    var showPlayerProgress = function (answrArray){
    //Use alert to show the player their progres  
        for(let i=0; i<wordList.length; i++){
            answrArray[i]="_";
        };
    };
    
    var getGuess = function () {
    // Use prompt to get a guess
    };
    
    var updateGameState = function (guess, word, answrArray) {
    // Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    };
    
    var showAnswerAndCongratulatePlayer = function (answerArray) {
    // Use alert to show the answer and congratulate the player
    };
    while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    }
    }
    var word = pickWord();
    showAnswerAndCongratulatePlayer(answerArray);

