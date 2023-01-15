function findLongestString(str)
{
    let maxLength=str[0].length
    let result_string = str[0]

    str.forEach(element => {
        if(element.length>maxLength)
        {
            maxLength=element.length
            result_string = element
        }
    });

    return result_string
}

const findLongestStringArrow=(str)=>
{
    let maxLength=str[0].length
    let result_string = str[0]

    str.forEach(element => {
        if(element.length>maxLength)
        {
            maxLength=element.length
            result_string = element
        }
    });

    return result_string
}

module.exports = findLongestString