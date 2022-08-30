let num1 = 1500; // number
let num2 = 2.5; // number

// concatenar
// console.log(num1.toString() + num2);

// representação binária
console.log(num1.toString(2))

// arredondamento
let num3 = 10.53427325132

console.log(num3.toFixed(2));

// descobrir se um número é inteiro

console.log(Number.isInteger(num1));

// descobrir se uma conta é inválida
let temp = num1 * '5';
console.log(Number.isNaN(temp));

// acertar a precisão de números com ponto flutuante
let num4 = 0.7;
let num5 = 0.1;


num4+= num5 // 0.8
num4+= num5 // 0.9 
num4+= num5 // 1.0
num4+= num5 // 1.1
num4+= num5 // 1.2
num4+= num5 // 1.3

// primeiro método
num4 = parseFloat(num4.toFixed(2))
// método alternativo
num4 = Number(num4.toFixed(2))

console.log(num4)

