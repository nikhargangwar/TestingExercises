const checkDigitsOfANumber = require('./ques2')

test("testing to check all digits same",()=>{
    expect(checkDigitsOfANumber(22)).toBe("true")
})

test("testing to check all digits same",()=>{
    expect(checkDigitsOfANumber(23)).toBe("false")
})

test("testing to check all digits same",()=>{
    expect(checkDigitsOfANumber(2332)).toBe("false")
})
test("testing to check all digits same",()=>{
    expect(checkDigitsOfANumber(2322)).toBe("false")
})