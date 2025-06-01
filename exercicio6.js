prompt = require('prompt-sync')();
const PI = 3.14; 
const CUSTO_POR_METRO_QUADRADO = 100.00; 
let raio = parseFloat(prompt("Digite o raio da lata (em metros):"));
let altura = parseFloat(prompt("Digite a altura da lata (em metros):"));


let areaLateral = 2 * PI * raio * altura;
let areaTampas = 2 * PI * raio * raio;
let areaTotal = areaLateral + areaTampas;

let custo = areaTotal * CUSTO_POR_METRO_QUADRADO;


alert("O custo da lata é: R$ " + custo.toFixed(2));

