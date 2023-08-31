const readline = require('readline-sync');

// const weightInKg = 54;
// const heightInCm = 175;

// Exercício 1 - Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.
// IMC = peso / altura²

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInM = height / 100;
  const heightSquared = heightInM ** 2; // salva o cálculo final da altura em uma constante

  const bmi = weight / heightSquared;

  return bmi;
}

// function main() {
//   const bmi = handleBMI(weightInKg, heightInCm);

//   console.log(`BMI: ${bmi.toFixed(2)}`);
// }

// main();

// Execício 2 - Agora, permita que o código seja executado através do comando npm run bmi.
// Solução: no arquivo package.json, adicionar o script "bmi": "node bmi.js".

// Exercício 3 - Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar. Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: “What’s your weight?” e “What’s your height?”. Deve-se utilizar o pacote readline-sync.

// function main() {
//   const weight = readline.questionInt('What\'s your weight? (kg) ');
//   const height = readline.questionInt('What\'s your height? (cm) ');
//   const bmi = handleBMI(weight, height);

//   console.log(`BMI: ${bmi.toFixed(2)}`);
// }

// main();

// Exercício 4 - Encontre a função adequada para transformar o peso em um número inteiro.

// function main() {
//   const weight = readline.questionFloat('What\'s your weight? (kg) ');
//   const height = readline.questionInt('What\'s your height? (cm) ');
//   const bmi = handleBMI(weight, height);

//   console.log(`BMI: ${bmi.toFixed(2)}`);
// }

// main();

// Exercício 5 - Imprima na tela o IMC e em qual categoria ele se enquadra.

const BMI_MAX_AND_MIN = {
  'UNDERWEIGHT': {
    MAX: 18.5,
    MIN: 0,
  },
  'NORMAL': {
    MAX: 24.9,
    MIN: 18.5,
  },
  'OVERWEIGHT': {
    MAX: 29.9,
    MIN: 25,
  },
  'OBESE I': {
    MAX: 34.9,
    MIN: 30,
  },
  'OBESE II': {
    MAX: 39.9,
    MIN: 35,
  },
  'OBESE III': {
    MAX: 100,
    MIN: 40,
  }
}

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { MAX, MIN } = BMI_MAX_AND_MIN[status];
    return bmi >= MIN && bmi <= MAX;
  });
  return resultFind;
}

function main() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
  const bmi = handleBMI(weight, height);
  const bmiResult = handleBMIResult(bmi);

  // console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(bmiResult);
}

main();