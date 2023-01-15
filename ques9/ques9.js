function replaceCharacter(str){
    const arr = Array.from(str);
    for (let i = 0 ; i<str.length ; i++){
        arr[i] = String.fromCharCode(str[i].charCodeAt() + 1)
    }
    return arr.join("");
}

module.exports =  replaceCharacter