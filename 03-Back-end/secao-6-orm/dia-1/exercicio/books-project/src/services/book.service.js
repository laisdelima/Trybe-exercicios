const { Book } = require ('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const createBook = async ({ title, author, pageQuantity, publisher }) => {
  const bookCreated = await Book.create({ title, author, pageQuantity, publisher });

  return bookCreated;
};

const updateBook = async (id, { title, author, pageQuantity, publisher }) => {
  const [updatedBook] = await Book.update({ title, author, pageQuantity, publisher }, {where: { id } });

  return updatedBook;
};

const removeBook = async (id) => {
  const removedBook = await Book.destroy({ where: { id } });

  return removedBook;
}

const getByAuthor = async ({ author }) => {
  const searchedBook = Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return searchedBook;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
  getByAuthor,
};