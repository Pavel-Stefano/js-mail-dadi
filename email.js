// 1) chiedere email utente e validarla 
const email = ['pavelstefano@gmail.com','pippo@gmail.com','pluto@gmail.com'];
let emailUtente = (prompt(`qual'è la tua email?`));
const div = document.querySelector('.app')

console.log(email)

    let trovata = false;

    for (let i = 0; i < email.length; i++) {
    
        if(emailUtente === email[i]) {
            trovata = true;
        }
    }   console.log(emailUtente)
        if(trovata) {
            div.append('benvenuto');
        }
        else {
            div.append('email non corretta');
        }
    
       