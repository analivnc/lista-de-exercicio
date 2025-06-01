const prompt = require('prompt-sync')();

let fahrenheit = parseFloat(prompt("Temperatura em Fahrenheit:"));
let celsius = (5 * fahrenheit - 160) / 9;
console.log("Temperatura em Celsius: " + celsius.toFixed(2));
let polegadas = parseFloat(prompt("Quantidade de chuva em polegadas:"));
const MILIMETRO_POR_POLEGADA = 25.4;
console.log("Milímetros: " + (polegadas * MILIMETRO_POR_POLEGADA).toFixed(2));
