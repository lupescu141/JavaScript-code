let has_entered_duplicate = false;
let numbers = [];

while (!has_entered_duplicate){

    const number = parseFloat(prompt("Enter different numbers"))

    if (numbers.includes(number)){
        has_entered_duplicate = true;
        alert("Number has already been given!")
    }
    else {
        numbers.push(number);
    }
}

numbers.sort(function(a, b){return a - b});

for (const number of numbers) {
    console.log(number);
}