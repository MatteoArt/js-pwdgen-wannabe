const userName = prompt("Inserisci il tuo nome");
const surname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Quale'è il tuo colore preferito?");
const age = prompt("Quanti anni hai?");

//numero che verrà stampato nella password
const pwdNumber = parseInt(age) + 21;
//console.log(userName, surname, userColor, age);

document.getElementById("pwd").innerHTML = `${userName}${surname}${userColor}${pwdNumber}`;