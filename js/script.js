/*
1. Chiedere all'utente quanti km farà
2. Età del passeggero/passeggera
*/

const numeroKm = parseFloat (prompt ('Quanti chilometri farai?'));

console.log(numeroKm);

const anniPasseggero = parseFloat (prompt ('Quanti anni hai?'));

console.log(anniPasseggero);

// Prezzo del biglietto: 0.21€ al km

let costoBiglietto = numeroKm * 0.21;

console.log(costoBiglietto);

// Sconti

let ventiPercento = costoBiglietto * 0.20;

let costoBigliettoMinorenne = costoBiglietto - ventiPercento;

let quarantaPercento = costoBiglietto * 0.40;

let costoBigliettoOver = costoBiglietto - quarantaPercento;

if ( (anniPasseggero > 18) && (anniPasseggero < 65) ){
    document.getElementById('output').innerHTML = costoBiglietto.toFixed(2) + '&euro;';
    console.log(costoBiglietto);
} else if ( anniPasseggero < 18 ){
    document.getElementById('output').innerHTML = costoBigliettoMinorenne.toFixed(2) + '&euro;';
    console.log(costoBigliettoMinorenne);
} else {
    document.getElementById('output').innerHTML = costoBigliettoOver.toFixed(2) + '&euro;';
    console.log(costoBigliettoOver);
}






