const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [
      ['title', 'ASC'],
    ],
  });

  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
}

const create = async (title, author, pageQuantity) => {
  const book = await Book.create({ title, author, pageQuantity });

  return book;
}

const update = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id } });

  return updatedBook;
}

const remove = async (id) => {
  const removedBook = await Book.destroy({ where: { id } });

  return removedBook;
}

const getByAuthor = async (author) => {
  const book = await Book.findAll({
    where: {
      author,
    },
    order: [
      ['title', 'ASC'],
    ],
  });

  return book;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};