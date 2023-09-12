const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;

app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => res.json(teams));

// // códigos repetitivos

// app.post('/teams', (req, res) => {
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) {
//     const team = { id: nextId, ...req.body };
//     teams.push(team);
//     nextId += 1;
//     res.status(201).json(team);
//   } else {
//     res.sendStatus(400);
//   }
// });

// app.put('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const requiredProperties = ['nome', 'sigla'];
//   const team = teams.find(t => t.id === id);
//   if (team && requiredProperties.every((property) => property in req.body)) {
//     const index = teams.indexOf(team);
//     const updated = { id, ...req.body };
//     teams.splice(index, 1, updated);
//     res.status(201).json(updated);
//   } else {
//     res.sendStatus(400);
//   }
// });

// app.get('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find((t) => t.id === id);
//   if (team) {
//     res.json(team);
//   } else {
//     res.sendStatus(404);
//   }
// });

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

// app.put('/teams/:id', validateTeam, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find((t) => t.id === id);
//   if (team) {
//     const index = teams.indexOf(team);
//     const updated = { id, ...req.body };
//     teams.splice(index, 1, updated);
//     res.status(201).json(updated);
//   } else {
//     res.sendStatus(400);
//   }
// });

// app.delete('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find((t) => t.id === id);
//   if (team) {
//     const index = teams.indexOf(team);
//     teams.splice(index, 1);
//   }
//   res.sendStatus(204);
// });

// --------------------------------------------
// Para fixar

// 1. 🚀 Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

// 2. 🚀 Reaproveite esse middleware e refatore as rotas PUT /teams/:id e DELETE /teams/:id para usarem ele também.

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  // if (team) { // não há necessidade de coferir se o time existe, pois o middleware existingId já faz isso.
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
  // } else {
  res.sendStatus(400);
  // }
});

app.delete(('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  // if (team) {
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  // }
  res.sendStatus(204);
}));

// 3. 🚀 Mova o middleware validateTeam para o arquivo src/middlewares/validateTeam.js, mas continue usando o middleware nas rotas POST /teams e PUT /teams/:id.
// importação feita na linha 2.

// 4. 🚀 Mova o middleware existingId para o arquivo src/middlewares/existingId.js, mas continue usando o middleware nas rotas PUT /teams/:id e DELETE /teams/:id.
// importação feita na linha 3 e move também a const teams para o arquivo src/utils/teams.js.

module.exports = app;