prompt = require('prompt-sync')();
//Escreva um programa para ler o salario mensal atual de funcionario e o percentual de reajuste. Calcular e escrever o novo salario.
  let salario = parseFloat(prompt("digite o salário atual: "));
  let percentual = parseFloat(prompt("digite o percentual de reajuste: "))

 let novoSalario = salario + (salario * percentual / 100);


console.log ("O novo salario é: ", novoSalario);

  