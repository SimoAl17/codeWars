

function solution(number) {
    let set = new Set();
    for (let i = 3; i < number; i += 3) {
        set.add(i);
    }
    for (let i = 0; i < number; i += 5) {
        set.add(i);
    }
    let sum = 0;
    for (const num of set) {
        sum += num;
    }
    return sum;
}

console.log("Mi aspetto 0, ho ottenuto:", solution(-3));
console.log("Mi aspetto 0, ho ottenuto:", solution(2));
console.log("Mi aspetto 23, ho ottenuto:", solution(10));
console.log("Mi aspetto 60, ho ottenuto:", solution(16));