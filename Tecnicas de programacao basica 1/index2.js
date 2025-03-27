const prompt = require("prompt-sync")();

var nome;

nome = ["Jose", "Lucas", "Silva"];

console.log(nome[2]);

for (let i = 0; i < nome.length; i++) {
    const element = nome[i];
    console.log(element);
}    

nome.splice(1);

console.log(nome);


let numeros = [10,20,30,40];
numeros.push(50);
numeros.shift();
console.log(numeros.length);

console.log(numeros);
numeros.splice(0,2);
console.log(numeros);


let valores = [2, 4, 6, 8];
valores.forEach((valor, index) =>{
    valores[index] = valor * 2;
});
console.log(valores);

console.log(valores.map);

valores.join(11);
console.log(valores);
