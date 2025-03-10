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