const getTripleNumber = (number) => {
    if (!Array.isArray(number)) {
        throw new Error('Invalid Type');
    }

    const tripleNumbers = number.map(num => num * 3)
    const evenNumber = tripleNumbers.filter(number => number % 2 == 0)
    return number.map(num => num * 2)
}

//using reduce
const getTripleNumber2 = (numbers) =>numbers.reduce((accumulator, item) => {
    console.log(accumulator,item)
        if ((item * 3) % 2 === 0) {
            accumulator.push(item*3);
        }
        return accumulator;
    },[]);


const getTripleNumber3 = (arr)=>{

    if(!Array.isArray(arr))
    {
        throw new Error ('Invalid Data Type')
    }
    const tripleNumberArray = arr.map((ele)=>ele*3)
    const filteredArray = tripleNumberArray.filter(ele=>ele%2===0)
    return filteredArray

}


module.exports = { getTripleNumber,getTripleNumber2,getTripleNumber3}