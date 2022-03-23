// chiedo il nome
const first_name = prompt("Qual è il tuo nome?")
console.log(first_name);

// chiedo il cognome
const last_name = prompt("Qual è il tuo cognome?")
console.log(last_name);

// chiedo il colore preferito
const fav_color = prompt("Qual è il tuo colore preferito?")
console.log(fav_color);

// genero la pw
document.getElementById("password").innerHTML = first_name + last_name + fav_color + Number(94)