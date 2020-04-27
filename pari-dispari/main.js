// gioco pari o dispari contro il pc:
// chiedere all'utente se sceglie pari o dispari
// chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5.
// fare la somma dei due numeri (giocata utente + giocata pc)
// quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno


/***** esecuzione prinpipale *****/

// chiedere all'utente se vuole pari o dispari
var scelta_utente = prompt('Vuoi pari o dispari?');
console.log('Hai scelto: ' + scelta_utente);

// chiedere all'utente un numero tra 1 e 5
var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log('Il tuo numero è: '+ numero_utente);

// controllo se l'input dell'utente è un numero valido
if(is_valid(numero_utente)) {
    // il numero inserito dall'utente è un numero valido => possiamo giocare

    // generare un numero random tra 1 e 5
    var numero_pc = genera_random(1, 5);
    console.log('Il numero del pc è: ' + numero_pc);

    // sommare numero utente + numero pc
    var somma = numero_utente + numero_pc;
    console.log('La somma fa: ' + somma);

    // valutare chi ha vinto
    var vincitore = valuta_vincitore(somma, scelta_utente);
    if(vincitore == 'utente') {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
} else {
    // il numero inserito dall'utente non è un numero valido => non si può giocare
    console.log('Non hai inserito un numero valido');
}

/***** fine esecuzione prinpipale *****/


// funzione per verificare se un numero è valido
// restituisce true se l'input è un numero valido, false altrimenti
function is_valid(numero) {
    if(!isNaN(numero) && numero >= 1 && numero <= 5) {
        // il valore è un numero intero, ed è compreso tra 1 e 5
        return true;
    } else {
        // il valore non è un numero intero (es: stringa)
        // oppure è < di 1 oppure è > di 5
        return false;
    }
}

// funzione che genera un numero random tra min e max
function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione per valutare se un numero è pari o dispari
// restituisce true se il numero è pari, false altrimenti
function is_pari(numero) {
    if(numero % 2 == 0) {
        // il numero è pari
        return true;
    } else {
        // il numero è dispari
        return false;
    }
}

// funzione per valutare chi è il vincitore tra utente e pc
function valuta_vincitore(risultato, selezione) {
    // valutare se la somma è pari o dispari e decidere chi è il vincitore

    // procedimento A
    // valuto contemporaneamente pari e dispari e scelta utente
    if( (is_pari(risultato) && selezione == 'pari') || (!is_pari(risultato) && selezione == 'dispari') ) {
        // casi di vittoria utente:
        // la somma è pari e l'utente ha scelto pari
        // oppure
        // la somma è dispari e l'utente ha scelto dispari
        return 'utente';
    } else {
        // casi di vittoria pc (perdita utente):
        // la somma è pari e l'utente ha scelto dispari
        // oppure
        // la somma è dispari e l'utente ha scelto pari
        return 'pc';
    }


    // procedimento B
    // valuto distintamente i casi pari e dispari e la scelta dell'utente
    // if(is_pari(somma)) {
    //     // il risultato è pari => l'utente vince se ha detto pari
    //     if(scelta_utente == 'pari') {
    //         // console.log('Hai vinto!');
    //         return 'utente';
    //     } else {
    //         // console.log('Hai perso');
    //         return 'pc';
    //     }
    // } else {
    //     // il risultato è dispari => l'utente vince se ha detto dispari
    //     if(scelta_utente == 'dispari') {
    //         // console.log('Hai vinto!');
    //         return 'utente';
    //     } else {
    //         // console.log('Hai perso');
    //         return 'pc';
    //     }
    // }

}
