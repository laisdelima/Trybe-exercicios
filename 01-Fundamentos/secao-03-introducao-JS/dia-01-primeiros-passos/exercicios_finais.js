/* Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
    Adição (a + b)
    Subtração (a - b)
    Multiplicação (a * b)
    Divisão (a / b)
    Módulo (a % b) */

const a = 15;
const b = 8;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

/* Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados. */

const numberOne = 36;
const numberTwo = 25;

if (numberOne > numberTwo) {
    console.log("numberOne é maior que numberTwo.");
} else {
    console.log("numberTwo é maior que numberOne.");
}

/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados. */

const a = 40;
const b = 75;
const c = 38;

if (a > b && a > c) {
    console.log("O maior número é: " + a);
} else if (b > a && b > c) {
    console.log("O maior número é: " + b);
} else {
    console.log("O maior número é: " + c);
}

/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */

const number = 9;

if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

/* Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. */

const anguloA = 45;
const anguloB = 40;
const anguloC = 95;

let somaAngulos = anguloA + anguloB + anguloC;

if (anguloA > 0 && anguloB > 0 && anguloC > 0) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro!");
}

/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
    Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
    Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let chessPiece = "bispo";

switch (chessPiece.toLowerCase()) {
    case "rei":
        console.log("rei -> anda apenas uma casa em qualquer direção.");
        break;
    case "rainha":
        console.log("rainha -> anda quantas casas quiser, em todas as direções.");
        break;
    case "bispo":
        console.log("bispo -> anda na diagonal.");
        break;
    case "cavalo":
        console.log("cavalo -> anda fazendo movimento de L.");
        break;
    case "torre":
        console.log("torre -> anda na horizontal e na vertical.");
        break;
    case "peão":
        console.log("peão -> anda uma ou duas casas no primeiro movimento, depois, apenas uma casa.");
        break;
    default:
        console.log("peça inválida!");
        break;
    }

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 85;

if (nota < 0 || nota > 100) {
    console.log('Erro, nota inválida.');
} else if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else {
    console.log('F');
};
