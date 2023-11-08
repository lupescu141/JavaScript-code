let array = []

for (let i = 0; i < 5; i++) {
    array.push(parseInt(prompt(`${i + 1}/5 Enter number`)))
}

for (let i = 4; i >= 0 ; i--) {
    console.log(array[i])
}