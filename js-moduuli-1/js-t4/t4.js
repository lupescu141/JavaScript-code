const name = prompt(`Tell me you name young witch`);
const random_number = Math.floor((Math.random() * 4) + 1);
let house

if (random_number === 1){
    house = "Gryffindor"
}
else if (random_number === 2){
    house = "Slytherin"
}
else if (random_number === 3){
    house = "Hufflepuff"
}
else if (random_number === 4){
    house = "Ravenclaw"
}

document.getElementById("house").innerHTML = `${name}, you are ${house}`