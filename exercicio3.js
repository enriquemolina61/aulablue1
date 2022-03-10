const prompt = require('prompt-sync')();

console.log("Vamos calcular o tota de dias já vividos totalmente por você, para isso precisamos saber quantos anos, meses e dias você tem de vida. A seguir digite sua idade informando quantos anos, dias e meses que voce possui:");

let anos = +prompt("Digite a quantidade de anos que você tem:");
let meses = +prompt("Digite a quantidade de meses que você tem:");
let dias = +prompt("Digite a quantidade de dias que você tem:");

let diastotais = anos*365 + meses*30 + dias;

console.log(`Você viveu um total de ${diastotais} dias.`) 
