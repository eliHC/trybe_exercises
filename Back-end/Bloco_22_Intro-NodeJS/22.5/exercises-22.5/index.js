const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./authMiddleware');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.post('/user/register', authMiddleware,  (req, res) => {
  res.status(201).json({ "message": "user created" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
