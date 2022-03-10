const prompt = require('prompt-sync')();
let nota1 = +prompt('Digita a nota 1:');
let nota2 = +prompt('Digita a nota 2:');

let mediapond = nota1 * 0.4 + nota2 * 0.6;

console.log('A média final é de: ', mediapond);
