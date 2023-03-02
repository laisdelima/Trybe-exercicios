// Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.
let student = {

}

function addProperty(object, key, value) {
    object[key] = value
};

let newKey = 'firstName';
let firstName = 'Laís';

addProperty(student, newKey, firstName);

newKey = 'lastName';
let lastName = 'Lima';

addProperty(student, newKey, lastName);

newKey = 'email';
let email = 'laispsico92@gmail.com';

addProperty(student, newKey, email);

newKey = 'GitHub';
let gitHub = 'laisdelima';

addProperty(student, newKey, gitHub);

newKey = 'LinkedIn';
let linkedin = 'laís-de-lima-arantes'

addProperty(student, newKey, linkedin);
console.log(student);

// Outra forma de fazer:

// let student = {};

// function addProperty(object, key, value) {
//   object[key] = value;
// };

// addProperty(student, 'firstNome', 'Laís');
// addProperty(student, 'lasttNome', 'Lima');
// addProperty(student, 'email', 'laispsico@gmail.com');
// addProperty(student, 'Github', 'github.com/laisdelima');
// addProperty(student, 'LinkedIn', 'linkedin.com/laís-de-lima-arantes');

// console.log(student);
