// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// una parola è palindroma se riesco a leggerla anche all'incontrario
// posso leggerla dall'ultima lettera tornando indietro fino alla prima
// rovescio la stringa e vedo se è uguale alla stringa originale


// creo una funzione per rovesciare una stringa
function rovescia_stringa(parola) {

    // separo tutti i caratteri della parola e ne creo un array
    var parola_array = parola.split('');

    // rovescio l'array con tutti i caratteri della parola
    var parola_array_rovescio = parola_array.reverse();

    // ricostruisco la stringa rovescia
    var parola_rovescia = parola_array_rovescio.join('');

    // console.log(parola);
    // console.log(parola_rovescia);

    // restituisco la parola rovescia
    return parola_rovescia;
}

// funzione per decidere se una parola è palindroma
// restituisce true se la parola passata come parametro è palindroma, false altrimenti
function is_palindroma(parola) {
    // invoco la funzione per rovesciare la stringa
    // var parola_utente_rovescia = rovescia_stringa(parola);
    // console.log(parola_utente_rovescia);

    // verifico se la parola iniziale è uguale alla parola rovescia
    if(parola == rovescia_stringa(parola)) {
        // console.log('La parola è palindroma');
        return true;
    } else {
        // console.log('La parola non è palindroma');
        return false;
    }
}

// chiedo una parola all'utente
var parola_utente = prompt('Inserisci una parola');
console.log(parola_utente);
// verifico se la parola inserita dall'utente è palindroma
// var palindroma = is_palindroma(parola_utente);
if(is_palindroma(parola_utente)) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}
