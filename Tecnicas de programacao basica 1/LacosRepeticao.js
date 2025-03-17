const prompt = require("prompt-sync")();

const qtdNotas = 3;
var notas = [];
var media = 0;

for(i=0; i<qtdNotas; i++){
    notas[i]=prompt("Inforne a "+(i+1)+"ª nota: ");
    media = Number(media) + Number(notas[i]);
}

for(i=0; i<qtdNotas; i++){
    console.log("Nota "+ (i+1) + " : " + notas[i]);
}


console.log("Média é: " + (media/qtdNotas));

var a = 0;
while(a<10){
    console.log(a);
    a +=3;
}

a = 11;
do {
    console.log(a);
    a = a + 3;
} while (a<10);


var senhaSolicitada;
const senha = 1234;

do {
    senhaSolicitada= prompt("Qual a senha? ");
    if(senhaSolicitada != senha){
        console.log("Senha incorreta, tente outra vez. ");
    }
} while (senhaSolicitada != senha);
console.log("Acesso liberado!");

m = 1

l=1
