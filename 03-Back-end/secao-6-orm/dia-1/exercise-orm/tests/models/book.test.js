const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../src/models/book');

describe('Book model', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
  checkModelName(Book)('Book');
  });

  describe('possui as propriedades corretas', () => {
    ['title', 'author', 'pageQuantity', 'publisher', 'createdAt', 'updatedAt']
      .forEach(checkPropertyExists(book));
  });
});