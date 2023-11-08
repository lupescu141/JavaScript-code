
const vuosiluku = prompt("Enter year number");
const option_a = vuosiluku % 4;
const option_b = vuosiluku % 100;
const option_c = vuosiluku % 400;

let response;

if (option_a === 0 && option_b > 0) {
        response = "Entered year is a leap year!";
}
else if (option_c === 0) {
        response = "Entered year is a leap year!";
}
else {
        response = "Entered year is not a leap year!";
}

document.getElementById("leap-year").innerHTML = response