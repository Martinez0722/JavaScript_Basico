// Primitivos (imutáveis) - string, number, boolean, undefined null (bigint, symbol)
// Referência (mutável) - array, object, function

// let a = 'A';
// let b = a;

// console.log(a,b);

// a = 'something else';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [... a];
// let c = b
// console.log(a,b);

// a.push(4);
// console.log(a, b)

// b.pop();
// console.log(a, b);

// a.push('Karim')
// console.log(c)

const pessoa = {
    nome: 'John',
    sobrenome:'Cahill'
};

const b = {...pessoa};

pessoa.nome = 'Graham'
console.log(pessoa)
console.log(b)