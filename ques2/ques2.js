function checkDigitsOfANumber(number)
{
    // if(number<10)
    // {return false}

    let reference_digit = number%10;
    while(number!=0)
    {
        if(number%10!==reference_digit)
        {
           
            return "false";
        }
        number=parseInt(number/10);
    }

    return "true";
}

//arrow function
const checkDigitsOfANumberArrow= (number)=>{
    if(number<10)
    {return false}

    let reference_digit = number%10;
    while(number>0)
    {
        if(number%10!=reference_digit)
        {
            return false;
        }
        number/=10;
    }

    return true;
}
module.exports = checkDigitsOfANumber