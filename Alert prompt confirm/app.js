let num1 = prompt("Digite um número")
let num2 = prompt("Digite outro número")
const pergunta= prompt("Qual operação matemática gostaria de realizar?")
num1 = Number(num1)
num2 = Number(num2)

if(pergunta==="soma")
{   const resultado = (num1) + (num2)
    alert(`O resultado da sua conta foi ${resultado}`)
}
if(pergunta==="subtração")
{   const resultado = (num1) - (num2)
    alert(`O resultado da sua conta foi ${resultado}`);
}
if(pergunta==="divisão")
{   const resultado = (num1) / (num2)
    alert(`O resultado da sua conta foi ${resultado}`);
}
if(pergunta==="multiplicação")
{   const resultado = (num1) * (num2)
    alert(`O resultado da sua conta foi ${resultado}`);
}
if(pergunta==="potenciação")
{   const resultado = (num1) ** (num2)
    alert(`O resultado da sua conta foi ${resultado}`);
    
}
