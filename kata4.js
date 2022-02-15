//+(012) 345-6789

function base() {
    let range = [...new Array(10).keys()];
    let format = "+(xxx) xxx-xxxx";
    for (let i = 0; i < range.length; i++) {
        format = format.replace("x", range[i]);
    }
    return format;
}

function random() {
    let range = Array.from({length:10},() => Math.floor(Math.random() * 10)); //Numeri random da 1 a 10 (10 non compreso)
    let format = "+(xxx) xxx-xxxx";
    for (let i = 0; i < range.length; i++) {
        format = format.replace("x", range[i]);
    }
    return format;
}

console.log(base());
console.log(random());