prompt = require('prompt-sync')();

let potencia = parseFloat(prompt("Digite a potência do refrigerador em kW:")); 
let tempo = parseFloat(prompt("Digite o tempo em horas que ele ficou ligado:"));
let precoKWh = parseFloat(prompt("Digite o valor do kWh em reais:")); 


let energiaGasta = potencia * tempo; 


let valorPago = energiaGasta * precoKWh;

alert("Energia gasta: " + energiaGasta.toFixed(2) + " kWh");
alert("Valor a ser pago: R$ " + valorPago.toFixed(2));
