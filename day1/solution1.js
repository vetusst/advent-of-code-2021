// Day 1 

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./day1/input.txt', {encoding: 'utf-8'})

input = input.split('\n').map(x => Number(x))

const solution1 = (input) => {
    let counter = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] < input[i + 1]) counter++
    }
    return counter
}

console.log(solution1(input))