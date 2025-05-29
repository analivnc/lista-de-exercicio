prompt = require('prompt-sync')();
// Crie um programa que leia 3 numeros e faça a media entre eles. Após o calculo, imprima o valor na tela
let numero1 = Number(prompt("digite primeiro numero: "))
let numero2 = Number(prompt("digite segundo numero: "))
let numero3 = Number(prompt("digite terceiro numero: "))

let media = (numero1 + numero2 + numero3) /3;

console.log('a media é ', media);