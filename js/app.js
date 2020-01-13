/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Gerardo Bilbatua 
  */

 // crete a new game
const G =  new Game();

document.querySelector('#btn__reset').addEventListener('click', () =>{

  var h1Title = document.querySelector('h1').innerText;// check current h1 title

  if(  h1Title === '') {
const keys = document.querySelectorAll('.key'); // select all keys
var selection;
keys.forEach(k => {
   k.addEventListener('click', e => {  
    selection = e.target.textContent //get text value of the clicked key
    G.handleInteraction(selection);
    
       })
    })


}
//reset the previous game

else {

// remode list items (letters from phrase)
let node = document.querySelector('#phrase').firstElementChild; //Ul;
let child = node.firstElementChild;
listLength = node.querySelectorAll('li').length;

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

G.startGame(); 

});






  