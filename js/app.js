/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Gerardo Bilbatua 
  */
let G;
// create,reset,start game board
function newGame(){
  G =  new Game();
  G.resetGame();
  G.startGame();
  }

document.querySelector('#btn__reset').addEventListener('click', () =>{
     newGame();
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
   
});

 




  