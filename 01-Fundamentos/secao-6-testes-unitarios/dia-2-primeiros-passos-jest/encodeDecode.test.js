// Exercício 3

// Para as funções encode e decode, crie os seguintes testes em Jest:

// Teste se encode e decode são funções;

// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;

// Teste se as demais letras/números não são convertidos para cada caso;

// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

const { encode, decode } = require('./encode.js');

describe('test encode and decode functions', () => {
  it('test if encode and decode is defined', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });
  it('test if encode and decode is a function', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('test encode conversion letters', () => {
    expect(encode('a', 'b', 'c', 'd', 'e')).toEqual('1', '2', '3', '4', '5');
  });
  it('test decode conversion numbers', () => {
    expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'b', 'c', 'd', 'e');
  });
  it('test the numbers of characters', () => {
    expect(encode('functions').length).toEqual(9);
  });
})