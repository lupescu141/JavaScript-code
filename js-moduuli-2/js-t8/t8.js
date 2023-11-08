let array = ["Johnny", "DeeDee", "Joey", "Marky"]

const concat = (array) =>{

    let result = "";

    for (const arrayElement of array) {
        result += arrayElement;
    }

    return result;
}

document.getElementById("response").innerHTML = concat(array)