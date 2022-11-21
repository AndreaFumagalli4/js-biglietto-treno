/*
1. Chiedere all'utente quanti km farà
2. Età del passeggero/passeggera
*/

const numeroKm = parseFloat (prompt ('Quanti chilometri farai?'));

console.log(numeroKm);

const anniPasseggero = parseInt (prompt ('Quanti anni hai?'));

console.log(anniPasseggero);

// Prezzo del biglietto: 0.21€ al km

let costoBiglietto = numeroKm * 0.21;

console.log(costoBiglietto);

// Sconti

let ventiPercento = costoBiglietto * 0.20;

let quarantaPercento = costoBiglietto * 0.40;

let costoTotaleBiglietto = costoBiglietto;

// Calcolo prezzo totale

if ( anniPasseggero < 18 ){
    costoTotaleBiglietto = costoBiglietto - ventiPercento;
    console.log(costoTotaleBiglietto);
} else if ( anniPasseggero >= 65 ) {
    costoTotaleBiglietto = costoBiglietto - quarantaPercento;
    console.log(costoTotaleBiglietto); 
}

document.getElementById('output').innerHTML = 'Il prezzo del biglietto è di ' + costoTotaleBiglietto.toFixed(2) + '&euro;';





