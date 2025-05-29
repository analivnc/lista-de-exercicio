const prompt = require('prompt-sync')();

// Entrada dos dados
let nome1 = prompt("Digite o nome da primeira pessoa: ");
let idade1 = parseInt(prompt("Digite a idade da primeira pessoa: "));
let peso1 = parseFloat(prompt("Digite o peso da primeira pessoa: "));

let nome2 = prompt("Digite o nome da segunda pessoa: ");
let idade2 = parseInt(prompt("Digite a idade da segunda pessoa: "));
let peso2 = parseFloat(prompt("Digite o peso da segunda pessoa: "));

let nome3 = prompt("Digite o nome da terceira pessoa: ");
let idade3 = parseInt(prompt("Digite a idade da terceira pessoa: "));
let peso3 = parseFloat(prompt("Digite o peso da terceira pessoa: "));

// Cálculo das médias
let mediaIdade = (idade1 + idade2 + idade3) / 3;
let mediaPeso = (peso1 + peso2 + peso3) / 3;

// Saída dos resultados
console.log(`Idade média: ${mediaIdade.toFixed(2)}`); 
console.log(`Peso médio: ${mediaPeso.toFixed(2)}`);
