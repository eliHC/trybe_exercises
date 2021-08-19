const { 
  uppercase,
  users,
  findUserById,
  getUserName,
} = require('../src/exercises')


 test('Check if "test" is equal "test"', (done) => {
  uppercase('test', (theString) =>{
    try {
      expect(theString).toMatch('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});


test('if the user exists', () => {

})
