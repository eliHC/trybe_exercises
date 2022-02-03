// Exercício : Crie os controllers do seu projeto com as seguintes rotas:
// GET /books - lista todos os livros;
// GET /book/:id - pega o livro com o id especificado;
// POST /book - cria um novo livro;
// POST /book/:id - sobrescreve o livro com ID selecionado;
// DELETE /book/:id - deleta um livro;
// Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.

// const sequelize = require('sequelize');??

const Book = async (sequelize, DataTypes) => {
  const Book = await sequelize.define('Book', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
  });

  return Book;
};

module.exports = Book;
