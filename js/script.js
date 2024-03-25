//! Test
// alert("ciao")

// Chiediamo all'utente il numero di chilometri che vuole percorrere
let userKm = prompt("Quanti km vuoi percorrere?"); //string
userKm = parseInt(userKm); //trasformo la string in number
console.log(userKm, typeof userKm);

// Chiediamo all'utente la sua età
let userAge = prompt("Quanti anni hai?"); //string
userAge = parseInt(userAge); //number
console.log(userAge, typeof userAge);

// Dichiaro variabile sconto
let discount = 0;

let price = userKm * 0.21; //number
console.log(price, typeof price);

// Condizion per lo sconto
if (userAge < 18) {
    discount = price * 0.20;
    console.log(discount);
} else if (userAge > 65) {
    discount = price * 0.40;
    console.log(discount);
}

// Calcolo il prezzo totale
let totalPrice = price - discount; //number
console.log(totalPrice, typeof totalPrice);

// Riduco a 2 decimali il prezzo totale
totalPrice = Math.round((totalPrice + Number.EPSILON)*100)/100;
console.log(totalPrice, typeof totalPrice);

