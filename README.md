# Phrase Hunter Game App
Interactive JavaScript guessing game created by applying object-oriented programming paradigm. The app includes three classes that contain the corresponding methods and properties as a blueprint for the instantiated objects. The instantiation of this classes allows an easy management of the game such as creating new games and adding multiple functionalities in a organized and scalable manner.

# Game Description
The game allows users to select letters from a virtual keyboard by simply clicking on the keys, if there is a match then the matched letter(s) are displayed otherwise the letters won’t be displayed causing the user too loose one life. The pressed keys get disabled on each click and change color if there is a match or not, and finally if the user guesses all the letters then the user wins, otherwise loses.


# Phrase Class
 - Includes constructor that receives a `phrase` parameter and initializes a `phrase`
property set to the phrase
- Includes `addPhraseToDisplay()` method which displays the phrase on the
gameboard
- Includes `checkLetter()` method which checks if a letter is in the phrase
- Includes `showMatchedLetter()` method which reveals the letter(s) on the board that
matches the player's selection

# Game Class 
- Includes a constructor that initializes a `missed` property set to `0`, a `phrases`
property set to an array of five Phrase objects, and an `activePhrase` property set to
`null` initially
Includes `startGame()` method that hides the start screen overlay, sets the
`activePhrase` property to a random phrase, and calls the `addPhraseToDisplay()`
method on the active phrase
- Includes `getRandomPhrase()` method that randomly retrieves one phrase from the
`phrases` array
- Includes `handleInteraction()` method that:
 If the phrase does **not** include the guessed letter, the `wrong` CSS class is
added to the selected letter's keyboard button and the `removeLife()` method
is called
- If the phrase includes the guessed letter, the `chosen` CSS class is added to
the selected letter's keyboard button, the `showMatchedLetter()` method is
called on the phrase, and the `checkForWin()` method is called. If the player
has won the game, the `gameOver()` method is called

- Includes `checkForWin()` method that checks if the player has revealed all of the
letters in the active phrase
- Includes a `removeLife()` method that removes a life from the scoreboard (one of the
`liveHeart.png` images is replaced with a `lostHeart.png` image), increments the
`missed` property, and if the player has lost the game calls the `gameOver()` method
- Includes `gameOver()` method that displays a final "win" or "loss" message by
showing the original start screen overlay styled with either the `win` or `lose` CSS
class

# app.js
- Clicking the "Start Game" button creates a new `Game` object and starts the game
- Clicking an onscreen keyboard button results in a call to the `handleInteraction()`
method for the clicked keyboard button
- Clicking the spaces between and around the onscreen keyboard buttons does not
result in the `handleInteraction()` method being called

# Reseting the Gameboard
- After a game is completed, the gameboard is reset so that clicking the "Start Game"
button loads a new game



