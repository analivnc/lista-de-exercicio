prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número entre 1 e 10 para ver a tabuada:"));

if (numero >= 1 && numero <= 10) {
    let resultado = "Tabuada de " + numero + ":\n";

    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

   console.log (resultado);
} else {
   console.log("Número inválido! Digite um número de 1 a 10.");
}
