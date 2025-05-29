prompt = require('prompt-sync')();
//o coração humano bate em media uma vez por segundo. Desenvolva um programa que calcula e escreva quantas vezes o coração de uma pessoa batera se viver x anos.
  let anos = Number(prompt("Digite a quantidade de anos:"));

//bate em media uma vez por segundo
let batePorSegundo = 60 * 60 * 24 * 365 * anos;
let totalBate = batePorSegundo * anos
console.log ("O coração bateu", totalBate, "vezes em", anos, "anos.");

  