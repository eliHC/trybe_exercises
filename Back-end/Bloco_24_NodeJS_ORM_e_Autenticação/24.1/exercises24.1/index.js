const express = require('express');
const app = express();

const booksController = require('./controllers/booksC');

app.use(express.json());

app.route('/books').get(booksController);




//----------------------
//
app.listen('3000', () => {
  console.log(`Escutando na porta 3000`);
});
