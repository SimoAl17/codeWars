function incrementString(string) {
    let index = 0;
    if (isNaN(string[string.length-1])) {
        return string + 1;
    }
    for (let i = string.length-1; i >= 0; i--) {
        if (isNaN(string[i])) {
            index = i + 1;
            break;
        }
    }
    let stringNumber = string.substring(index);
    let number = parseInt(stringNumber);
    return string.substring(0, index) + (number + 1);
}

function incrementString2(string) {
    const regex = new RegExp(/\d+$/);
    let searchResult = regex.exec(string);
    if (!searchResult) {
        return string + 1;
    } else {
        let numberFoundString = searchResult[0];
        const numberInt = parseInt(numberFoundString);
        return string.substring(0, string.length - numberFoundString.length) + numberInt + 1;
    }
    
}

console.log("Mi aspetto 'Montagna89', ho ottenuto", incrementString2("Montagna88"));
console.log("Mi aspetto 'Montagna1', ho ottenuto", incrementString2("Montagna"));
console.log("Mi aspetto '55Montagna1', ho ottenuto", incrementString2("55Montagna"));