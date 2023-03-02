let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

/*   Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”. */

let nomeKey = leitor.nome;
let sobrenomeKey = leitor.sobrenome;
let tituloKey = leitor.livrosFavoritos[0].titulo;

console.log('O livro favorito de ' + nomeKey + ' ' + sobrenomeKey + " se chama " + '"' + tituloKey + '"');

/* Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações: */

leitor.livrosFavoritos.push(
  {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
);
/* console.log(leitor); */

/* Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código. */

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
