const express = require('express');

const app = express();
app.use(express.json());

// função get para pedir algo. A rota '/' será a rota raiz.
// (req, res) => {}: espera uma função callback e pode receber de 2 a 4 parâmetros, sendo eles:
// req (por meio dela que recebemos os dados (envio por query, params e body)), res, next e err.
// app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));

// status code mais conhecidos:
// 200: OK
// 404: Not Found
// 500: Internal Server Error

// é interessante ter a prática de salvar os status em constantes.

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// foi utilizado o Thunder Client para testar as rotas, com os métodos GET e POST, inicialmente.

module.exports = app;