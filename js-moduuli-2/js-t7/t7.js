const number_of_sides = parseInt(prompt("Enter number of sides"));
let ul = document.getElementById("response");
let has_rolled_max = false;
const dice_roll = (number_of_sides) =>{
    return Math.floor((Math.random() * number_of_sides) + 1);
}

while (!has_rolled_max){
    let roll = dice_roll(number_of_sides);

    if (roll === number_of_sides){
        has_rolled_max = true;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${roll}`));
        ul.appendChild(li);
    }
    else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${roll}`));
        ul.appendChild(li);
    }
}