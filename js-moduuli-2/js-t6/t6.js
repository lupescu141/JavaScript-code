let ul = document.getElementById("response");
let has_rolled_six = false;
const dice_roll = () =>{
    return Math.floor((Math.random() * 6) + 1);
}

while (!has_rolled_six){
    let roll = dice_roll();

    if (roll === 6){
        has_rolled_six = true;
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