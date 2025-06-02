prompt = require('prompt-sync')();

let lado = parseInt(prompt("Digite o tamanho do lado do quadrado (1 a 20): "));

if (lado < 1 || lado > 20) {
  
} else {
for (let i = 0; i < lado; i++) {
let linha = "";
for (let j = 0; j < lado; j++) {
if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
linha += "*";
 } else {
 linha += " ";
 }
}
console.log(linha);
}
}
