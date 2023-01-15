const concatStrings = require('./ques7')

test("concat two string except first letter",()=>{
    expect(concatStrings(["cat","dog"])).toEqual("atog")
})