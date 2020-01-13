/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Gerardo Bilbatua 
 */

class Phrase {
    
    //constructor
   constructor(phrase){
   this.phrase = phrase.toLowerCase();
   
  
   }
   
   //this methods receives a random phrase and parses the phrase into list items filtered by a letter class and space class
   addPhraseToDisplay(){
    let letter = this.phrase.split(""); // split phrase into letters
    
    
    letter.forEach(l => {
        
        if( l === ' '){ // space list item with space class
            let list = document.querySelector('#phrase').firstElementChild;
            let litem = document.createElement('li');
             litem.className = 'space';
             litem.innerHTML = ' ';
             list.appendChild(litem);
            
        }
        else{ // letter list item with letter class

            let list = document.querySelector('#phrase').firstElementChild; //select list
            let litem = document.createElement('li') // add a list item per letter of phrase
            litem.className = `hide letter ${l}` // add class with letter name by using interpolation
            litem.innerHTML = l;
            list.appendChild(litem); //append listitem to the DOM
         
           
        }
    });
    
   
      
   }
//checks if the letter selected by the player matches a letter in the phrase.
// Listen to every key on the virtual keyboard
   checkLetter(letter){
    let check = false;
    check = this.phrase.includes(letter);
    
    if (check === true){
     return letter;
     }
    
}

  //reveals the letter(s) on the board that matches the player's selection
   showMatchedLetter(letter){ 
 const matchedletter = this.checkLetter(letter);
 const listOfLetters = document.querySelectorAll('.letter');
 

 listOfLetters.forEach( L =>  {

if(matchedletter === L.innerHTML){
const getClass = L.classList;
getClass.value = `show letter ${matchedletter}` 

}

 } )

  }

}
