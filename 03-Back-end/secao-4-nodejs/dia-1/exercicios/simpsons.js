// Exercício 6 
// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;

async function readAll() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsParsed = JSON.parse(simpsons);
  
  simpsonsParsed.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  }

readAll();

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

async function getById(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsParsed = JSON.parse(simpsons);
  
  const simpson = simpsonsParsed.find((simpson) => Number(simpson.id) === id);
  
  if (!simpson) {
    throw new Error('id não encontrado');
  }
  return simpson;
}

async function main() {
  const simpson = await getById(7);
  console.log(simpson);
}

main();

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function filterSimpson() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsonsParsed = JSON.parse(simpsons);

  const simpsonsFiltered = simpsonsParsed.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFiltered));
}

async function main() {
  await filterSimpson();
}

main();

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function createSimpsonFamily() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsonsParsed = JSON.parse(simpsons);

  const simpsonsFamily = simpsonsParsed.filter((simpson) => Number(simpson.id) <= 4);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

function main() {
  createSimpsonFamily();
}

main();

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function addNelson() {
  const simpsons = await fs.readFile('./simpsonFamily.json', 'utf-8');

  const simpsonsParsed = JSON.parse(simpsons);

  simpsonsParsed.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsParsed));
}

function main() {
  addNelson();
}

main();

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

async function replaceNelson() {
  const simpsons = await fs.readFile('./simpsonFamily.json', 'utf-8');

  const simpsonsParsed = JSON.parse(simpsons);

  simpsonsParsed[4] = { id: '8', name: 'Maggie Simpson' };

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsParsed));
}

function main() {
  replaceNelson();
}

main();