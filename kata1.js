const scores = ["2:4", "3:2", "1:1", "3:5"]
const scores1 = ["4:4", "3:1", "1:1", "3:5", "2:4", "2:1"]

function points(games) {
    let score = 0;
    for (const game of games) {
        const numbers = game.split(":");
        const number1 = parseInt(numbers[0]);
        const number2 = parseInt(numbers[1]);
        if (number1 > number2) {
            score += 3;
        } else if (number1 === number2) {
            score += 1;
        }
    }
    return score;
}

console.log("Mi aspetto 4, ho ottenuto:", points(scores));
console.log("Mi aspetto 8, ho ottenuto:", points(scores1));