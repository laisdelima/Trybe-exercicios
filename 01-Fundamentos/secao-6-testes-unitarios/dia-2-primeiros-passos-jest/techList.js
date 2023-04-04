// Exercício 4

// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//     tech: 'nomeTecnologia',
//     name: name,
//   }

// Implemente a função techList a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.

const techList = (arrayTech, nome) => {
  if(arrayTech.length === 0) return 'Vazio!';

  const sortedArray = arrayTech.sort();
  const newArray = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    newArray.push({
      tech: sortedArray[index],
      name: nome,
    });
  }
  return newArray;
};

module.exports = techList;