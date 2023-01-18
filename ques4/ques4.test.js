const findLongestString = require('./ques4');

test('testing for longest string',()=>{
  expect(findLongestString(['avs','asdf','fffff'])).toBe('fffff');
});