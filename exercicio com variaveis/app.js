let varA = 'A';
let varB = 'B';
let varC = 'C';

// Resolução 1
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

// Resolução 2
[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);