const capitalizeLetters = require('./ques3');

test('change the case of characters',()=>{
  expect(capitalizeLetters('aSb')).toBe('AsB');
});