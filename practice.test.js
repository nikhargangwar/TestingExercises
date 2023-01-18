// const { divideTwoNumbers} = require('./practice')

// describe('division utilities',()=>{
//     describe('double number',()=>
//     {
//         it('triple number',()=>
//         {

//             expect(()=>divideTwoNumbers(6,0)).toThrow('divisor cannot be 0')
//         })
//         it('triple number',()=>
//         {

//             expect(divideTwoNumbers(6,2)).toBe(3.0)
//         })

//     })
// })


const { tripleNumbers } = require('./practice');
describe('Array Utilities', () =>
  describe('Double Numbers', () => {
    it('Should double the elements when the input is an array', () => {
      const result = tripleNumbers([1, 2, 3]);
      expect(result).toEqual([6]);
    }),
    it('Should return -1 when input is not an array', () => {
      expect(() => {
        tripleNumbers(1);
      }).toThrowError('Not an array');
    }),
    it('Should throw error when input is not an array of numbers', () => {
      //const result = tripleNumbers(["siddharth", 1]);
      expect(() => {
        tripleNumbers(['siddharth', 1]);
      }).toThrowError('Not an array of numbers');
    });
  })
);