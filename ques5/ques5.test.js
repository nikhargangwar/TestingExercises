const leapyear = require('./ques5')

test("testing to check all digits same",()=>{
    expect(leapyear(2000)).toBe(true)
})

test("testing to check all digits same",()=>{
    expect(leapyear(2001)).toBe(false)
})