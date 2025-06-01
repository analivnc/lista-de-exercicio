const prompt = require('prompt-sync')();


let nota = -1; // inicia com um valor inválido

do {
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10: "));
    if (nota < 0 || nota > 10) {
        console.log("Nota inválida. Tente novamente.");
    }
} while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota);
