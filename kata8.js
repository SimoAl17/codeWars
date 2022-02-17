

// 3
//121
//=7


//  5
// 343
//12321
//=24


//   7
//  565
// 34543
//1234321
//=58

function mountainsOfHoiyama(width) {
    let weight = 0;
    let core = Math.ceil(width / 2);
    let border = 0;
    while (core <= width) {
        for (let i = (core - 1); i > border; i--) {
            weight += i * 2;
        }
        weight += core;
        core += 1;
        border += 2;    
    }
    return weight;
}

console.log("Mi aspetto 7, ho ottenuto:", mountainsOfHoiyama(3));
console.log("Mi aspetto 24, ho ottenuto:", mountainsOfHoiyama(5));
console.log("Mi aspetto 58, ho ottenuto:", mountainsOfHoiyama(7));