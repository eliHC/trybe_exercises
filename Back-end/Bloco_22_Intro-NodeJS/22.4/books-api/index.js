const express = require('express');
const app = express();
const port = 3000;

const jsonParser = express.json();

const books = [
    {id: 1, name: 'The Design of EveryDay Things'},
    {id: 2, name: 'The Most Human Human'},
    {id: 3, name: 'Dune'},
];

app.get('/', (req, res) => {
  res.send('whatsup!!!');
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:bookID", (req, res) => {
  const bookID = parseInt(req.params.bookID);

  const findBook = books.find((book) => book.id === bookID);
  res.json(findBook.name);
});

app.post("/books", jsonParser, (req, res) => {
  books.push(req.body);
  
  console.log(req.body);

  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
