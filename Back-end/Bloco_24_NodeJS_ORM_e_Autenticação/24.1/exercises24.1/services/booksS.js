const { Book } = require('../models');

const readAll = () => {
  const booksQuery = Book.findAll();

  return booksQuery;
};

module.exports = {
  readAll,
};
