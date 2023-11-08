const dice = parseFloat(prompt("Enter number of dice"));
const dice_sum = parseFloat(prompt("Enter the sum of dice"));
let times_sum = 0

for (let i = 0; i < 10000 ; i++){

    let sum = 0

    for (let j = 0; j < dice ; j++) {
        sum += Math.floor((Math.random() * 6) + 1);
        console.log(sum)
    }

    if (sum === dice_sum){
        times_sum ++
    }
}

const probability = times_sum / 10000 * 100
document.getElementById("response").innerHTML = `Probability to get sum ${dice_sum} with ${dice} dice is ${probability.toFixed(2)}%`