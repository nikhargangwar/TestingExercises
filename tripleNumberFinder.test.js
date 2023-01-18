const { getTripleNumber, getTripleNumber2, getTripleNumber3 } = require('./arrayUtilities')

// describe('Array utilities',()=>{
//     describe('double number',()=>
//     {
//         it('triple number',()=>
//         {
//             const result =getTripleNumber("string")
//             expect(result).toThrow('Invalid type')
//         })
// it('Should -1 when input is string',()=>
// {
//     const result =doubleNumbers('string')
//     expect(result).toStrictEqual(-1)
// })

// it('Should throw error when input is not a number',()=>
// {
//     expect(()=>{doubleNumbers()}).toThrow("you must provide a number")
// })

//     })
// })

describe('finding triple array with even elements', () => {
    describe('triple number', () => {
        it('should throw error if input is not array', () => {
            expect(() => getTripleNumber3('string')).toThrow('Invalid data type')
        })
        it('should give tripled array', () => {
            const result = getTripleNumber3([1, 2, 3])
            expect(result).toBe([2, 4, 6])
        })
})
})
