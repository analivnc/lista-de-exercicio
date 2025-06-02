prompt = require('prompt-sync')();

let salarioAtual = parseFloat(prompt("Digite o sálario atual do colaborador: "))
let percentual;
if (salarioAtual <= 280){
  percentual = 20
} else if  (salarioAtual <= 700){
  percentual = 15
} else if (salarioAtual <= 1500){
percentual = 10
} else 
percentual = 5
let aumento = salarioAtual * (percentual / 100);
let novoSalario = salarioAtual + aumento;

console.log(" Reajuste Salarial ");
console.log("Salário antes do reajuste: R$ " + salarioAtual.toFixed(2));
console.log("Percentual de aumento aplicado: " + percentual + "%");
console.log("Valor do aumento: R$ " + aumento.toFixed(2));
console.log("Novo salário após o reajuste: R$ " + novoSalario.toFixed(2));