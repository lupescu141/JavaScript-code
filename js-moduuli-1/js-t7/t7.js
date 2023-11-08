const user_input = prompt("Enter count of dice rolls");
let sum = 0;

for (let i = 0; i < user_input ; i++) {
    const roll = Math.floor((Math.random() * 6) + 1)
    sum += roll
    console.log(`${roll}`)
}

document.getElementById("response").innerHTML = `Sum of rolls: ${sum}`;
