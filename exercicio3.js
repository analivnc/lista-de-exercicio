prompt = require('prompt-sync')();
//Crie um programa que leia o numero de horas trabalhadas no mes e o valor da hora. O programa devera imprimir o salario que o funcionario deverá receber, calculando o desconto de 6% do vale transporte;
let horasTrabalhadas = Number(prompt("digite o total de horas trabalhadas no mes: "));
let valordaHora = Number(prompt("digite o valor da hora: "));

let salarioBruto = horasTrabalhadas * valordaHora;
let desconto = salarioBruto * 0.06;
let salarioLiquido = salarioBruto - desconto;

console.log (" o salario liquido é:", salarioLiquido);


  