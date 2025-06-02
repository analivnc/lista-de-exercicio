prompt = require('prompt-sync')();

let data = (prompt("Digite uma data no formato: dd/mm/aaaa: "))


let partes = data.split("/")

let dia = partes[0];
let mes = parseInt(partes[1]); 
let ano = partes[2];

let nomeMeses = [
"janeiro", "fevereiro", "março", "abril", "maio", "junho",
"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
]
let nomeMes = nomeMeses[mes - 1];
console.log(`${dia} de ${nomeMes} de ${ano}`);