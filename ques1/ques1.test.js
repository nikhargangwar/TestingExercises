const {largestEvenumber,largest_Evenumber} = require('./ques1')


test('testing for largest even number',()=>{
    expect(largestEvenumber([1,2,3,4,5])).toBe(4)
    
})
test('testing for largest even number',()=>{
    expect(largestEvenumber([1,3,5,7])).toBe(-1)
})
test('testing for largest even number',()=>{
    expect(largestEvenumber([-1,-2,-5,-6])).toBe(-1)
})

test('testing for largest even number',()=>{
    expect(largestEvenumber([0,1,7,9,13])).toBe(0)
})

test('testing for largest even number',()=>{
    expect(largestEvenumber([0,2,4,8,2])).toBe(8)
})

test('testing for largest even number',()=>{
    expect(largestEvenumber([4,4,4,4])).toBe(4)
})
    
    
   
    