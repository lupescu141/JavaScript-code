let user_input = parseFloat(prompt("Enter a number"));
let times_divided = 0
let rounds = user_input;

while (rounds > 0){

    if (user_input % rounds === 0){
        times_divided += 1;
    }

    rounds -= 1
}

if (times_divided !== 2){
    document.getElementById("response").innerHTML = `The number '${user_input}' is not a prime number.`;
}

else {
    document.getElementById("response").innerHTML = `The number '${user_input}' is a prime number.`;
}