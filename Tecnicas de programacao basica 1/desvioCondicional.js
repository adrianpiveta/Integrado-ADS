const prompt = require("prompt-sync")();


"== < > >= > !="

if (2==="2"){
    console.log("Certo");
}else{
    console.log("Errado");
}

var a = 1, b=2, c=3, d=4;

if(a<b && c<d){
    console.log("Certo");
} else{
    console.log("Errado!");
}

if (a<b || b>c) {
    console.log("Certo");
} else {
    console.log("Errado");
}


var nome, nota;

nome = prompt("Nome? ");
nota = prompt("Qual nota? ");

if (nota >=70) {
    console.log("Aluno "+ nome + " aprovado");
} else if(nota >=40){
    console.log("Aluno " + nome + " de exame");
} else {
    console.log("Aluno "+ nome + " reprovado");
}