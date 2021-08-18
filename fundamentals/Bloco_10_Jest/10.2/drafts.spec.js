//  COM ASYNC/AWAIT. Reparar no parametro 'Done'

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b + 1;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return resolve(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

// describe('Quando o tipo do animal existe', () => {
//   test('Retorne a lista de animais', () => (
//     findAnimalsByType('Dog').then((listDogs) => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     })
//   ));

//   test('Em caso de erro', () => {
//     expect(findAnimalsByType('Lion'))
//       .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
//   })
// });

// describe('Jest', () => {
//   test('Brincando com expect', () => {
//     const expectA = expect(true).toBeTruthy();
//     const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
//     const expectC = expect(Promise.reject(new Error('ERROR')))
//       .rejects.toEqual(new Error('ERROR'));
//     console.log('expect', expectA);
//     console.log('expect.resolves', expectB);
//     console.log('expect.rejects', expectC);
//   });
// });


test('Testando com async/await', async () => {
  const listDogs = await findAnimalsByType('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

