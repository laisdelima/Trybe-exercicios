const BookService = require ('../services/book.service');

const getAll = async (req, res) => {
  const { author } = req.body;

  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
    console.log(books);
  } else {
    books = await BookService.getAll();
  }

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const bookById = await BookService.getById(id);

  if(!bookById) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(bookById);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.createBook({ title, author, pageQuantity, publisher });

  res.status(201).json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity, publisher });

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  res.status(201).json({ message: 'Book updated' })
};

const removeBook = async (req, res) => {
  const { id } = req.params;
  
  const removedBook = await BookService.removeBook(id);

  if (!removedBook) return res.status(500).json({ message: 'Something went wrong' });
  res.status(201).json({ message: 'Book was deleted'});
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};