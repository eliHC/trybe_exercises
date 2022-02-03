// const BookModel = require()

const readAll = async () => {
  const booksQuery = await BookModel.queryAllBooks();

  return booksQuery;
};

module.exports = {
  readAll,
};
