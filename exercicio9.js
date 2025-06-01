const prompt = require('prompt-sync')();

let taxaDia = parseFloat(prompt("Taxa fixa por dia: "));
let taxaKm = parseFloat(prompt("Taxa por km rodado: "));
let dias = parseInt(prompt("Número de dias: "));
let kmRodado = parseFloat(prompt("Quilômetros rodados: "));
let desconto = taxaDia * 0.10 * dias;
let total = (taxaDia * dias - desconto) + (taxaKm * kmRodado);


console.log("Valor total: R$" + total.toFixed(2));
console.log("Desconto aplicado: R$" + desconto.toFixed(2));
console.log("Dias: " + dias);
console.log("Quilometragem: " + kmRodado);
