
function largestEvenumber(arrayOfIntegers){
    let max=-1
    arrayOfIntegers.forEach(num=>{
        if(num%2===0 && num>max)
        {
            max=num
        }
    })
    return max
}

module.exports = largestEvenumber