const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());
app.use('/people', peopleRoutes); // Adicionamos esse middleware definindo que toda requisição em que o path comece com /people seja encaminhada para ele.

module.exports = app;