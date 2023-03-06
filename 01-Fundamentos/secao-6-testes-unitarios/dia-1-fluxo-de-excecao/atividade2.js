const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
    lesson2.turno = 'noite';
    
    console.log(lesson2);
    console.log('--------------------------------------------------------');
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
    console.log(Object.keys(lesson1));

    console.log('--------------------------------------------------------');
// Crie uma função para mostrar o tamanho de um objeto.
    let objectLength = Object.keys(lesson1).length;
    console.log(objectLength);
    console.log('--------------------------------------------------------');
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
    console.log(Object.values(lesson1));
    console.log(Object.values(lesson2));
    console.log(Object.values(lesson3));
    console.log('--------------------------------------------------------');

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
   

    console.log(allLessons);
    /*
    {
    lesson1:
    { materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã' },
    lesson2:
    { materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite' },
    lesson3:
    { materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite' }
    };
    */