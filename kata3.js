function doors(studentsAndDoors) {
    const doorStates = new Array(studentsAndDoors).fill(false);
    for (let i = 1; i <= studentsAndDoors; i++) {
        for (let j = i; j <= studentsAndDoors; j += i) {
            doorStates[j-1] = !doorStates[j-1];
        }
    }
    return doorStates.reduce((p, c) => c ? (p + 1) : p, 0)
}

console.log(doors(5));