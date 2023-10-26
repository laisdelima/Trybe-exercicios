const express = require('express');
const app = express();
const BooksController = require ('./src/controllers/book.controller');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);
app.post('/books', BooksController.createBook);