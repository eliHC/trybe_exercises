// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');
const books = require('./data');


// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, value) => acc.concat(value)); // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Para os exercícios 2, 3 e 4 considere o seguinte array:

// const assert = require('assert');







// Adicione o código do exercício aqui:
// 2 - Crie uma string com os nomes de todas as pessoas autoras.

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   // escreva seu código aqui
//   return books.reduce((acc, curr, i, arr) => {
//     if (i === arr.length - 1) {
//       return `${acc}${curr.author.name}.`;
//     }

//     return `${acc}${curr.author.name}, `;
//   }, []);
// };

// assert.strictEqual(reduceNames(), expectedResult);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const expectedResult = 43;

// function averageAge() {
//   // escreva seu código aqui
//   const ages = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
//   return ages / books.length;
// }

// assert.strictEqual(averageAge(), expectedResult);







// 4 - Encontre o livro com o maior nome.

// const expectedResult = {
//   id: 1,
//   name: "As Crônicas de Gelo e Fogo",
//   genre: "Fantasia",
//   author: {
//     name: "George R. R. Martin",
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook() {
//   // escreva seu código aqui
//   return books.reduce((accumulator3000, currentT400) => {
//     if (accumulator3000.name.length < currentT400.name.length) {
//       return currentT400;
//     }

//     return accumulator3000;
//   });
// }

// assert.deepStrictEqual(longestNamedBook(), expectedResult);







// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

// const assert = require('assert');

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   // escreva seu código aqui
//   let splited =  names.reduce((acc, curr) => acc += curr).split('');

//   return splited.reduce((acc, curr) => (curr.toLowerCase() === 'a'? acc += 1 : acc), 0);
// }

// assert.deepStrictEqual(containsA(), 20);













// // 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

// const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const averageGrades = grades.map((element) => element.reduce((acc, curr) => acc + curr) / element.length);


  return students.reduce((acc, curr, i) => {
    acc.push({name: curr, average: averageGrades[i]})
    return acc;
  }, [])
}

  
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);







