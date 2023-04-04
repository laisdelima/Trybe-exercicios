// Organizando uma biblioteca!

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  const expectedResult = 'Stephen King';
  const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;

  console.log(authorBornIn1947());

// Retorne o nome do livro com menor número de caracteres (menor nome).
const nameOfBook = () => {
    let bookName;
    
    books.forEach((book) => {
        if (!bookName || book.name.length < bookName.length) {
            bookName = book.name;
        }
    })
    return bookName;
}
console.log(nameOfBook());

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const firstBook = () => books.find((book) => book.name.length === 26);

console.log(firstBook());

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const bornPeople = () => books.every((book) => (book.author.birthYear <= 1901 && book.author.birthYear >= 2000));
console.log(bornPeople());

// Faça uma função que retorne true, se algum livro tiver sido lançado na década de 80, e false, caso contrário.
const releasedBook = () => books.some((book) => (book.releaseYear >= 1980 && book.releaseYear <= 1989));
console.log(releasedBook());
