// 2. La coda dell'Array

// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array






const alertEl = document.querySelector('.alert');
const btn = document.querySelector('button');

btn.addEventListener('click' , function(){
    const numbersEl = parseInt(document.getElementById('numbers').value);
    console.log(numbersEl)
    if(!isNaN(numbersEl)){
        for(let i= 1; i <= numbersEl -1; i++){


        }
    }
    
})

// casella input e bottone e richimarli con una variabile