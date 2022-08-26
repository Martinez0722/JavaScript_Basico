const nome = 'Rafael';
const sobrenome = 'Martínez';
let anoNascimento = (2022 - 25)
const idade = 25;
const peso = 85;
const alturaEmM = 1.83;
let indiceMassaCorporal = peso/(alturaEmM* alturaEmM);
console.log(nome + ' ' + sobrenome + ' ' + 'tem' + ' ' +  idade + ' ' + 'anos, pesa'+ ' '+ peso+' '+'kg');// Concatenação
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); // Template string 
console.log(`${nome} ${sobrenome}  nasceu em ${anoNascimento}.`)// Template string

