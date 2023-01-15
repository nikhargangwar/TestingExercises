const findLongestString = require('./ques6')

test("testing whether a string ends with specific word",()=>{
    expect(findLongestString('sdhScript')).toBe(true)
})

test("testing whether a string ends with specific word",()=>{
    expect(findLongestString('Scripft')).toBe(false)
})
