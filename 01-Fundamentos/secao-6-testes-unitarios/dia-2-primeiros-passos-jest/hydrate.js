// Exercício 5

// A função hydrate recebe uma string no formato “numero bebida”, e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// // string recebida
// '1 cerveja'
// // retorno da função
// '1 copo de água'

// // string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// // retorno da função
// '4 copos de água'

// // string recebida
// '2 caipirinhas'
// // retorno da função
// '2 copos de água'

// Implemente a função hydrate a partir dos testes. É importante nunca alterar os testes ou as variáveis já escritas no código.

const hydrate = (string) => {
  const splitString = string.split('');
  let waterGlass = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    parseCharacter = parseInt(splitString[index]);

    if (parseCharacter) {
      waterGlass += parseCharacter;
    }
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
};

module.exports = hydrate;