const prompt = require("prompt-sync")();
var valor1, valor2, soma;

valor1 = prompt("Digite o valor 1: ");
valor2 = prompt("Digite o valor 2: ");
soma = Number(valor1) + Number(valor2);

console.log("Resultado é: " + soma);

valor1 = prompt("Digite o valor 1: ");
valor2 = prompt("Digite o valor 2: ");
soma = Number(valor1) - Number(valor2);

console.log("Resultado é: " + soma);


valor1 = prompt("Digite o valor 1: ");
valor2 = prompt("Digite o valor 2: ");
soma = Number(valor1) / Number(valor2);
console.log("Resultado é: " + soma);


valor1 = prompt("Digite o valor 1: ");
valor2 = prompt("Digite o valor 2: ");
soma = Number(valor1) % Number(valor2);

console.log("Resultado é: " + soma);

//square root
valor1 = prompt("Digite o valor 1: ");
valor2 = prompt("Digite o valor 2: ");
soma = Number(valor1) / Number(valor2);

console.log("Resultado é: " + soma);

valor1 =9;
console.log("Resultado é: "+Math.sqrt(valor1));
