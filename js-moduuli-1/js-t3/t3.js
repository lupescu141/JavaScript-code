let numbers = []
for (let i = 0; i < 3 ; i++) {
    numbers.push(parseInt(prompt(`${i}/3 insert any number:`)))
}

const sum = numbers[0] + numbers[1] + numbers[2]
const product = numbers[0] * numbers[1] * numbers[2]
const average = sum / 3

document.getElementById(`sum-average`).innerHTML = `Sum: ${sum} product: ${product} average: ${average.toFixed(2)}`