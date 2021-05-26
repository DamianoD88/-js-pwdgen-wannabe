var nome = prompt('inserisci Nome');
console.log(nome);

var cognome = prompt('inserisci Cognome');
console.log(cognome);

var colore = prompt('inserisci Colore Preferito');
console.log(colore);

var somma = nome + cognome + colore + '21';
document.getElementById('parole').innerHTML = somma;
console.log(somma);
