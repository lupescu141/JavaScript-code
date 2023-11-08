let has_entered_zero = false;
let numbers = [];

while (!has_entered_zero){

    const number = parseFloat(prompt("Enter any number or enter 0 to stop"))

    if (number === 0){
        has_entered_zero = true;
    }
    else {
        numbers.push(number);
    }
}

numbers.sort(function(a, b){return b - a});

for (const number of numbers) {
    console.log(number);
}