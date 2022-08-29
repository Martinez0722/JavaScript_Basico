let umaString = "Um texto";
let outraString = "O rato roeu a roupa do rei de roma."

// métodos de busca de um índice dentro de uma
// string, charAt
console.log(umaString.charAt(4));

// método tradicional
console.log(umaString[6]);

// por índice
console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('um', 3))

//Concatenação 
console.log(umaString.concat(' ', 'em', ' ', 'um',' ', 'lindo dia.'));

console.log(umaString + ' em um lindo dia.');

console.log(`${umaString} em um lindo dia.`);

// substituição
console.log(umaString.replace("Um", "Outro"));
console.log(outraString.replace(/r/, '#'));
console.log(outraString.replace(/r/g, '#'));

// ver o tamanho da string
console.log(outraString.length);

// fatiar um string
console.log(umaString.slice(2,5));

console.log(outraString.length - 3);
console.log(outraString.slice (32));

// dividir uma String
console.log(outraString.split('r'));

// passar tudo para capital letters
console.log(outraString.toUpperCase());

// passar tudo para lowercase
console.log(outraString.toLowerCase());