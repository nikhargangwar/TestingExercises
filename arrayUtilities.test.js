const {doubleNumbers} = require('./arrayUtilities')

describe('Array utilities',()=>{
    describe('double number',()=>
    {
        it('Should double element when input is array',()=>
        {
            const result =doubleNumbers([1,2,3])
            expect(result).toStrictEqual([2,4,6])
        })
        it('Should -1 when input is string',()=>
        {
            const result =doubleNumbers('string')
            expect(result).toStrictEqual(-1)
        })

        it('Should throw error when input is not a number',()=>
        {
            expect(()=>{doubleNumbers()}).toThrow("you must provide a number")
        })

    })
})