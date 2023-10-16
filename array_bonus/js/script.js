/* Bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

/**********************************/ 



const boxEl1 = [ 'sqaure1', 'sqaure2', 'sqaure3', 'sqaure4',];

const boxEl2 = [ 'circle1', 'circle2', 'circle3', 'circle4', 'circle5', 'circle6'];

const boxSquareEl = document.querySelector('.box1');
const box2CircleEl = document.querySelector('.box2');

const square = document.querySelectorAll('.square')
const circle = document.querySelectorAll('.circle')

const btn = document.querySelector('button')



let msg;


btn.addEventListener('click', function(){

  if (boxEl1.length < boxEl2.length) {
    const diff = boxEl2.length - boxEl1.length;
    for (let i = 0; i < diff; i++) {
      boxEl1.push(boxEl2[i]);
      const newBox = document.createElement('div');
      newBox.classList.add('circle');
      boxSquareEl.append(newBox);
    }

    msg = 'Ora box1 è uguale a box2';

  } else if (boxEl1.length > boxEl2.length) {
    const diff = boxEl1.length - boxEl2.length;

    for (let i = 0; i < diff; i++) {
      boxEl2.push(boxEl1[i]);
    }
    msg = 'Ora box2 è uguale a box1';
  }

const alertEl = document.querySelector('.alert');
alertEl.innerHTML = msg;

})


console.log(msg)
console.log(boxEl1);
console.log(boxEl2);


// chiedere come avrei potuto spostare gli oggetti