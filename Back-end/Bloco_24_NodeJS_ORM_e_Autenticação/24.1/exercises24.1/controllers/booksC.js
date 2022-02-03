const booksServices = require('../services/booksS');

const readAll = async (req, res) => {
  // brings all books

  const books = await booksServices.readAll()

  return res.status(200).send('success');
};

module.exports = {
  readAll,
};
