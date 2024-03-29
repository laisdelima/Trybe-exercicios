const { expect } = require('chai');
const { Book } = require('../../models');

describe('Testa o model `Book`', function () {
  it('possui a propriedade `title`', function () {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('Testa se `Book` possui a propriedade `author`', function () {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('possui a propriedade `pageQuantity`', function () {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('possui a propriedade `publisher`', function () {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
});