const prompt = require('prompt-sync')();
let idadedias = +prompt('Informe quantos dias você tem de idade:');

let restoanos = idadedias % 365;

let anos = (idadedias - restoanos) / 365;

let restomes = restoanos % 30;

let meses = (restoanos - restomes) / 30;

let dias = restomes;

console.log(`Você possui: ${anos} anos ${meses} meses ${dias} dias!`);
