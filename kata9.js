

function primeTo(number) {
    let primeNumbers = [2];
    for (let i = 3; i <= number; i++) {
        let numberToCheck = i;
        let isPrime = true;
        for (const prime of primeNumbers) {
            if (numberToCheck % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numberToCheck);
        }
    }
    return primeNumbers;
}

console.log(primeTo(11));