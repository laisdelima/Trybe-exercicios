// Para fixar!
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];
const divisibleNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(divisibleNumber);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const fiveLetters = names.find((name) => name.length === 5);
console.log(fiveLetters);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
 const idMusic = musicas.find((musica) => musica.id === '31031685');
 console.log(idMusic);