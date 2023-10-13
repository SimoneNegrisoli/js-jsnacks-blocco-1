// 1. TuttiFrutti

// Descrizione:
// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma non non la vogliamo utilizzare per cercare nel frigorifero.



// array frigo

const frigoEl = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

// pusho la pesca nel frigo

frigoEl.push('pesca')
console.log(frigoEl)

// flag element

let trovato = false
let msg;

// ciclo
for(let i = 0; i < frigoEl.length; i++){
    if (frigoEl[i] === 'cocomero'){
        trovato = true
} 
}

if (trovato === true){
    msg = 'Trovato! Devo solo preparare il cocktail.'
}else{
    msg = 'Oh no, devo uscire a comprare il cocomero!'
}


   

console.log(msg)