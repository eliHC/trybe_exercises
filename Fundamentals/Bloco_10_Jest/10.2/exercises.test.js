const { 
  uppercase,
  users,
  findUserById,
  getUserName,
} = require('./exercises')


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
