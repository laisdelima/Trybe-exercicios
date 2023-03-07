// Para fixar!

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo: "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic".

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const allData = {
    ...user,
    ...jobInfos,
}

const { name, age, nationality, profession, squad, squadInitials } = allData;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}-${squadInitials}`);
  