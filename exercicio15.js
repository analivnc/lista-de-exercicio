prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));

let inicio = Math.min(num1, num2);
let fim = Math.max(num1, num2);

let soma = 0;
let resultado = "Números no intervalo:\n";

for (let i = inicio + 1; i < fim; i++) {
    resultado += i + "\n";
    soma += i;
}

console.log(resultado);
console.log("Soma dos números do intervalo:", soma);
