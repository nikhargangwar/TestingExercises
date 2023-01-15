function capitalizeLetters(str)
{
    for(let i=0;i<str.length;i++)
    {
        if(/A-z/.test(str[i]))
        {
            str[i].toLowerCase()
        }
        else
        {
            str[i].toUpperCase()
        }
    }
    return str
}


const  capitalizeLettersArrow = (str)=>
{
    for(let i=0;i<str.length;i++)
    {
        if(/A-z/.test(str[i]))
        {
            str[i].toLowerCase()
        }
        else
        {
            str[i].toUpperCase()
        }
    }
    return str
}

module.exports = capitalizeLetters