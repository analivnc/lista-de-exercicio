prompt = require('prompt-sync')();
//Crie um programa que leia o valor do dolar e faça a conversao em reais. o usuario devera inserir o valor da cotação atual do dólar em reais e o valor do produto em dólar o programa devera imprimir o valor em reais


let valorReais = parseFloat(prompt("Digite a cotação atual do dólar: "));
let valorDolar = parseFloat(prompt("Digite o valor do produto em dólar: "));

let valorConvertido = valorReais * valorDolar;

console.log("O valor do produto em reais é: R$ " + valorConvertido.toFixed(2));
