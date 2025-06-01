const prompt = require('prompt-sync')();
do {
 nome = prompt("Digite o nome do usuário: ");
 senha = prompt("Digite a senha: ");

if (nome === senha) {
 console.log("erro: a senha não pode ser igual ao nome do usuário. Tente novamente.");
}

} while (nome === senha);

console.log("usuário e senha cadastrados com sucesso.");

