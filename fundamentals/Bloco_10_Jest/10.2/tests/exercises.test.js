const { 
  uppercase,
  users,
  findUserById,
  getUserName,
} = require('../src/exercises');
// test = require('@jest/globals');


 test('Check if "test" is equal "test"', (done) => {
  uppercase('test', (theString) => {
    try {
      expect(theString).toMatch('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});


test('if the user exists', () => (
  getUserName(2).then((user) => expect(user).toEqual('Paul'))
));

// test('if the user DONT exists', () => {
//   let val2 = getUserName(2)
//   getUserName(2).catch((user) => expect(user).toEqual('Pauxl'));
//   console.log(val2);
// });
