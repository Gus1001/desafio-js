let num = parseInt(prompt("Digite um número: "));

let num2 = num * 10;

let num3 = 0;

// Imprimir todos os números pares menores que o número digitado
for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
    console.log(`Número par antes do ${num}: ${i}`);
}}