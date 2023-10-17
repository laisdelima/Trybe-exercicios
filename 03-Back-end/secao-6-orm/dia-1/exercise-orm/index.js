const express = require('express');
const BooksController = require('./src/controllers/book.controller');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.create);

app.put('/books/:id', BooksController.update);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));