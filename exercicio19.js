prompt = require('prompt-sync')();

let i = 0;
let numero = parseInt(prompt("Digite um número: "));
let maior = numero;
i++;

while (i < 10) {
    numero = parseInt(prompt("Digite outro número: "));
    if (numero > maior) {
        maior = numero;
    }
    i++;
}

console.log("O maior número digitado foi:", maior);
