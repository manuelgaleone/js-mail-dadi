/*

    Mail
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

//MAIL

//Chiedo la propria Mail
document.querySelector(".mainTitle").innerHTML = ("Fammi controllare se puoi Accedere.")
let userMail = prompt("Qual è la tua E-Mail?");
console.log("La Mail dell'Utente è: " + userMail)

//Inserisco la Mail nella Lista d'accesso
let mailList = ["mario.rossi@gmail.com", "antonio.luigi@libero.it", userMail];
console.log("La Lista delle Mail è: " + userMail);

//Analizzo la Mail List
for (i = 0; i < mailList.length; i++) {

    //Controllo se la Mail dell'Utente c'è o meno
    if (mailList.indexOf(userMail) !== -1) {
        //Se c'è, gli dico che c'è
        document.querySelector(".mainTitle").innerHTML = ("La tua Mail c'è, puoi entrare.");
        console.log("La Mail c'è, puoi entrare.");
    } else {
        //Se non la trovo, gli comunico che non c'è
        document.querySelector(".mainTitle").innerHTML = ("La tua Mail non c'è, non puoi entrare.");
        console.log("La tua Mail non c'è, non puoi entrare.");
    }

}

//DADI

//Genero il numero sia per il Giocatore che per il Pc
let numberUser = Math.round(Math.random()*5+1);
console.log("Il numero del Giocatore è: " + numberUser);
document.querySelector(".subtitle").innerHTML = ("Il numero del Giocatore è: " + numberUser);

let numberPc = Math.round(Math.random()*5+1);
console.log("Il numero del Giocatore è: " + numberPc);
document.querySelector(".secondSubtitle").innerHTML = ("Il numero del Computer è: " + numberPc);

//Decreto il Vincitore e lo Comunico
    if (numberUser > numberPc) {
        document.querySelector(".winner").innerHTML = ("Ha vinto il Giocatore!");
    } else if (numberPc > numberUser) {
        document.querySelector(".winner").innerHTML = ("Ha vinto il PC!");
    } else if (numberPc = numberUser){
        document.querySelector(".winner").innerHTML = ("I numeri sono uguali!");
    };