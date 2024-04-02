let num = parseInt(prompt("Digite um número: "));

if (num % 2 === 0) { 
    console.log(`${num} é um número par.`);
}else{   
    console.log(`${num} é um número ímpar.`);
}

for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
    console.log(`Números impares antes do ${num}: ${i}`);
}}