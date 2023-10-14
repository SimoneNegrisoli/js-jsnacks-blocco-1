// 2. La coda dell'Array

// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array





        // casella input e bottone e richimarli con una variabile

const alertEl = document.querySelector('.alert');
const btn = document.querySelector('button');
let valido = false
let msg;

        // generazione numeri cusali
let numeriGenerati = [];

        // evento bottone
btn.addEventListener('click' , function(){

        // mi prendo i valori che metto nel campo di input
    let numbersEl = parseInt(document.getElementById('numbers').value);

        // validità numero
    if(!isNaN(numbersEl && parseInt(numbersEl) > 0)){
        valido = true

        for(let i= 0; i < parseInt(numbersEl); i++){
            let numeroCasuale = Math.floor(Math.random() * 100);
            numeriGenerati.push(numeroCasuale);
        }

        // stampo fuori dal ciclo se no me ne stampa per ogni giro
        console.log(numeriGenerati)
    }

        // stampo gli ultimi 5 elementi dell'array
    const ultimiElemnti = numeriGenerati.slice(- 5);
    console.log(ultimiElemnti)

    
        // validità msg
    if (valido === true) {
        msg = `Ultimi 5 numeri generati:   ${ultimiElemnti};`
    
    }else {
        msg = 'Inserisci un numero!';
        }

    

    // stampo il messaggio nell'elemento "alert" nell'HTML
    alertEl.textContent = msg;
    })