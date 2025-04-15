let nomes = ["João Silva", "Andressa Lemos", "Bruno Souza", "Mariana Bueno", "Douglas Américo"];
let notas = [8.0, 7.5, 6.3, 4.3, 10.0];

console.log("Lista Desordenada");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ", ficou com " + notas[i] + " de nota");
}
console.log("");

let auxNota;
let auxNome;
for (let i = 0; i < nomes.length; i++) {
    for (let j = i + 1; j < nomes.length; j++) {
        if (nomes[j] < nomes[i]) {
            auxNome = nomes[i];
            nomes[i] = nomes[j];
            nomes[j] = auxNome;

            auxNota = notas[i];
            notas[i] = notas[j];
            notas[j] = auxNota;
        }
    }
}

console.log("Lista Ordenada por nome");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ", ficou com " + notas[i] + " de nota");
}
console.log("");

for (let i = 0; i < notas.length; i++) {
    for (let j = i + 1; j < notas.length; j++) {
        if (notas[j] < notas[i]) {
            auxNome = nomes[i];
            nomes[i] = nomes[j];
            nomes[j] = auxNome;

            auxNota = notas[i];
            notas[i] = notas[j];
            notas[j] = auxNota;
        }
    }
}

console.log("Lista Ordenada por notas");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ", ficou com " + notas[i] + " de nota");
}