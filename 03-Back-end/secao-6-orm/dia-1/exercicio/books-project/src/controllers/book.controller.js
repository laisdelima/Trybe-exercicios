const BookService = require ('../services/book.service');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const bookById = await BookService.getById(id);

  if(!bookById) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(bookById);
}

module.exports = {
  getAll,
  getById,
};