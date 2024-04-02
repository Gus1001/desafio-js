let num1 = parseInt(prompt("Digite um número: "))
let op = prompt("Determine a operação: ")
let num2 = parseInt(prompt("Digite mais um número: "))

switch(op){
     case "+":
        console.log(`${num1} ${op} ${num2} = ${num1 + num2}`)
        break;
    case "-":
        console.log(`${num1} ${op} ${num2} = ${num1 - num2}`)
        break;
    case "*":
        console.log(`${num1} ${op} ${num2} = ${num1 * num2}`)
        break;
    case "/":
        console.log(`${num1} ${op} ${num2} = ${num1 / num2}`)
        break;
    default:
    console.log("Operação inválida")
}