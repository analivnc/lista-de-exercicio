prompt = require('prompt-sync')();

let n = parseInt(prompt("Quantos termos da sequência de Fibonacci você deseja? "));

let a = 1, b = 1;

console.log("Sequência de Fibonacci:");
if (n >= 1) console.log(a);
if (n >= 2) console.log(b);

for (let i = 3; i <= n; i++) {
    let proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
}
