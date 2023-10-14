/* Bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

/**********************************/ 



const boxEl1 = [ 'sqaure1', 'sqaure2', 'sqaure3', 'sqaure4', 'sqaure5']

const boxEl2 = [ 'circle1']

let msg;




if (boxEl1.length < boxEl2.length) {
    
    const diff = boxEl1.length - boxEl2.length;
    
  for (let i = 0; i < diff; i++) {
    boxEl1.push(boxEl2[i]); 
  }
  msg = 'ora box1 è ugale a box2'



} else if (boxEl1.length > boxEl2.length) {

  const diff = boxEl1.length - boxEl2.length;
  
  for (let i = 0; i < diff; i++) {
    boxEl2.push(boxEl1[i]);
  }
  msg = 'ora box2 è ugale a box1'

}

console.log(msg)
console.log(boxEl1);
console.log(boxEl2);