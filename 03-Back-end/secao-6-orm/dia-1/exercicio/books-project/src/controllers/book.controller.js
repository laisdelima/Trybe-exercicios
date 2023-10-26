const bookService = require ('../services/book.service');

const getAll = async (req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books);
}