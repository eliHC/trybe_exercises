const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.status(200).json({ message: `Hello, ${ name }!` });

  app.get('/hello', (req, res) => {
    console.log(res);
    res.status(200).json({ message: `Hello ${ name }` });
  });
});

app.post('/greetings', (req, res) => {
  const{ name, age } = req.body;

  if(age > 17) {
    return res.status(200).json({ message: `Hello, ${ name }!` });
  }
  res.status(401).json({ message: `Sorry, ${ name }! You are not old enough.` });
});

app.listen(port, () => {
  console.log('Escutando na porta 3000!');
});
