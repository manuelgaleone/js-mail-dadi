/*

    Mail
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

//MAIL

//Chiedo la propria Mail
let  userMail = prompt("Mi dai la tua Mail?");

const accessMail = [
    "manuelgaleone@gmail.com",
    "antoniocassano@gmail.com",
    "galeonemanuel@gmail.com",
    "manuelboolean@gmail.com"
    ];

let isValid = false;

for (let i = 0; i < accessMail.length; i++) {
    const element = accessMail [i];

    if (userMail === element) {
        isValid = true;
        console.log(isValid);
        document.querySelector(".mainTitle").innerHTML = ("Mail accettata: Benvenuto!");
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