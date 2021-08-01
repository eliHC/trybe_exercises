const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:





// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

// function formatedBookNames(bookList) {
//   // escreva seu código aqui
//   return bookList.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
// }

// assert.deepStrictEqual(formatedBookNames(books), expectedResult);






// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

// function nameAndAge(cavaquinho) {
//   // escreva seu código aqui
//   return cavaquinho.map((tiguiriguidim) => 
//   ({age: tiguiriguidim.releaseYear - tiguiriguidim.author.birthYear,
//     author: `${tiguiriguidim.author.name}`,
//   })
//   ).sort((a, b) => a.age - b.age);

// }

// assert.deepStrictEqual(nameAndAge(books), expectedResult);








// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use as função filter ;

// const expectedResult = [
//   { 
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

// function fantasyOrScienceFiction(bookList) {
//   // escreva seu código aqui
//   return bookList.filter((element) => element.genre === 'Fantasia' | element.genre === 'Ficção Científica');
// }

// assert.deepStrictEqual(fantasyOrScienceFiction(books), expectedResult);







// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered(bookList) {
//   // escreva seu código aqui
//   return bookList.filter((book) => 2021 - book.releaseYear >= 60)
//   .sort((a,b) => a.releaseYear-b.releaseYear);
// }

// assert.deepStrictEqual(oldBooksOrdered(books), expectedResult);







// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors(bookList) {
//   //  escreva seu código aqui
//   //  apenas nomes 
//   //  filtrar por sy-fi ou fantasia
//   //  ordem alfabetica

//   return bookList.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
//   .map((element) => element.author.name).sort();
// }

// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(books), expectedResult);







// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks() {
//   // escreva seu código aqui
//   return books.filter((book) => 2021 - book.releaseYear >= 60).map((element) => element.name);
// }

// assert.deepStrictEqual(oldBooks(), expectedResult);







// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  
  return books.find((book) => 
  book.author.name.split(' ')
  .filter((name) => name.endsWith('.'))
  .length === 3).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);







