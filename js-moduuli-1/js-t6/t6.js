
if (confirm("Should I calculate the square root?")){
    const user_input = prompt("Enter number");

    if (user_input < 0){
        document.getElementById("response").innerHTML = "The square root of a negative number is not defined"
    }

    else {
        const sqrt = Math.sqrt(user_input);
        document.getElementById("response").innerHTML = `${user_input} square root is ${sqrt.toFixed(2)}`
    }
}

else {
 document.getElementById("response").innerHTML = "The square root is not calculated."
}