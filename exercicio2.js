const prompt = require("prompt-sync")();

let nomepeca1 = prompt("Digite qual a primeira peça desejada:");
let qntpeca1 = +prompt("Digite a quantidade de peças desejadas:");
let valorunitpeca1 = +prompt("Qual valor unitário da primeira peça:");

let nomepeca2 = prompt("Digite qual a segunda peça desejada:");
let qntpeca2 = +prompt("Digite a quantidade de peças desejadas:");
let valorunitpeca2 = +prompt("Qual valor unitário da segunda peça:");

let valortotal = qntpeca1 * valorunitpeca1 + qntpeca2 * valorunitpeca2;

console.log("O valor total a ser pago é de: R$", valortotal);
