/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js *
 * Gerardo Bilbatua
 */

 class Game {

constructor(){
//missed = track number misses by the player
//phrases: an array of five Phrase objects to use with the game.
//activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
//console.log('New game has started');
this.missed = 0;
this.phrases = [
    new Phrase('How are you'),
    new Phrase('How old are you'),
    new Phrase('What is your name'),
    new Phrase('may the force be with you'),
    new Phrase('Have a great day')
];
this.activePhrase = {};
}


//select and  return a random phrase from the array of phrases stored in the Game class’s `phrases` property.
getRandomPhrase(){
    let randomnumber = Math.floor(Math.random()*5);  
    let randomphrase = this.phrases[randomnumber];
    return randomphrase;
    
    }


//startGame(): hides the start screen overlay, calls  getRandomPhrase(), addPhraseToDisplay(), and sets the activePhrase property
startGame(){

// hide overlay screen so that game board will appear
const overlay = document.querySelector('#overlay');
overlay.style.display = 'none';
  

this.activePhrase = this.getRandomPhrase();
//console.log(this.activePhrase);
this.activePhrase.addPhraseToDisplay();


/*
const phrase1  = new Phrase(this.getRandomPhrase());
this.activePhrase = phrase1 //assign phrase object to acttivephrase
phrase1.addPhraseToDisplay();
*/
}


// handles all logic of the game by using other functions
handleInteraction(key){
var selectedkey;
 // disable selected key
 const letters = document.querySelectorAll('.key');
 letters.forEach(l => {
 
    if(l.innerHTML === key){
        l.disabled = true;
        selectedkey =l;
        
    }
 })
 
 //if there is a match, display the letter
 let hiddenL = this.activePhrase.checkLetter(key);
if(hiddenL === key){
     this.activePhrase.showMatchedLetter(key);
     selectedkey.className = 'chosen';
     if(this.checkForWin()){

        this.gameOver(true);
     }
}
// if not then remove a life and highlight them as incorrect by assigning CSS classname = 'wrong'
else{
    if(this.missed <5){
 this.removeLife(key);
 selectedkey.className = 'wrong';
    }
}

if(this.missed === 5){
this.gameOver(false);

 }


}


// check for hide value of class attribute
// if there is at least one hide on class attribute of the list item, then return false(No WIN)
// else return tru (WIN)
checkForWin() {
const hideClasses = document.querySelectorAll('.hide');
let size = hideClasses.length;
//NOT WIN
if(size >= 1 ){
    
return false;
}

else {
    
return true;
}
   
}

removeLife(key){
const missed = this.activePhrase.checkLetter(key);
const tries = document.querySelectorAll('img');

if(missed === undefined){
//replace lives image when selected letter does not match
this.missed++;
 tries[this.missed-1].src = 'images/lostHeart.png';
 
   if(this.missed === 5){

    this.gameOver(false);
   }
}


}


gameOver(winOrLoose){
//display overlay
this.missed = 0; //reset lives
const overlay = document.querySelector('#overlay');
const h1 = document.querySelector('h1');

if(winOrLoose === false){
overlay.className = 'lose';
overlay.style =  'show';
h1.innerHTML = 'Sorry, good luck next time';

}
else{
overlay.className = 'win';
overlay.style =  'show';
h1.innerHTML = 'Congratulations!!! You Won';

}

}


resetGame(){

// remove list items (letters from phrase)
let node = document.querySelector('#phrase').firstElementChild; //Ul;
let child = node.firstElementChild;
let listLength = node.querySelectorAll('li').length;


for(let i = 0; i<=listLength-1; i++){
    node = document.querySelector('#phrase').firstElementChild; //Ul
    child = node.firstElementChild;
    node.removeChild(child);
}

// Enable all the onscreen buttons, and update CSS class to 'key'

 // Enable selected key
 const wrongs = document.querySelectorAll('.wrong');
 const chosens = document.querySelectorAll('.chosen');
 wrongs.forEach(l => {
 
    
        l.disabled = false;
        l.className = 'key';
})

chosens.forEach(l => {

   
       l.disabled = false;
       l.className = 'key';
})


// Reset the player's lives
const tries = document.querySelectorAll('img');

tries.forEach(t => {

t.src ='images/LiveHeart.png';


    })

}


 }