console.log("test:",153 === 1 + 125 + 27);

function isNarcissistic(number) {
    let string = number + "";
    let exp = string.length;
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const intNumber = parseInt(char);
        sum += Math.pow(intNumber, exp);
    }
    return sum === number;
}

console.log("Mi aspetto true, ho ottenuto:",isNarcissistic(153));
console.log("Mi aspetto false, ho ottenuto:",isNarcissistic(151));
console.log("Mi aspetto true, ho ottenuto:",isNarcissistic(370));
console.log("Mi aspetto false, ho ottenuto:",isNarcissistic(1938));
console.log("Mi aspetto true, ho ottenuto:",isNarcissistic(407));
