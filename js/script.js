// Mail
//1) Chiedi all’utente la sua email,
//1) controlla che sia nella lista di chi può accedere,
//1) stampa un messaggio appropriato sull’esito del controllo.
//2) Gioco dei dadi
//2) Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//3) Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// // 1) chiedere email utente e validarla
// const email = [];

// for(let i = 0; i < email.length; i++);{
//     const emailUtente = (prompt(`qual'è la tua email?`));

//     if(email = '@'){

//         alert('benvenuto');

//     }else{

//     alert('email non corretta');

//     }

//    email.push(emailUtente)

// }

// 2) generare un numero random da 1 a 6 sia pc che utente 
    let nCasualUtente, nCasualPc, estrazione;
    
    let play = document.getElementById('play');
    
// 3) stabilire un vincitore 
play.addEventListener('click',function (){
    let nCasualUtente =  Math.floor(Math.random() * 6 ) + 1;
    console.log(nCasualUtente, 'utente')

    let nCasualPc =  Math.floor(Math.random() * 6 ) + 1;
    console.log(nCasualPc, 'pc')


    let estrazione = 'pareggio, ritenta sarai più fortunato!';
    
    if( nCasualUtente > nCasualPc) {
        estrazione = 'congratulazioni, hai vinto!';
    }else if (nCasualUtente < nCasualPc) {
        estrazione = 'hai perso, ritenta sarai più fortunato!';
    }
    
    document.getElementById('utenteVince').innerHTML = nCasualUtente
    document.getElementById('pcVince').innerHTML = nCasualPc
    document.getElementById('giocata').innerHTML = estrazione
});




