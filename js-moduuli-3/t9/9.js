const button = document.getElementById("start");

button.onclick = () =>{
    const calculation = document.getElementById("calculation");
    const array = calculation.value.split();
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
    let result = 0

    for (let i = 0; i < array.length; i++) {

        if (array[i] === '+'){
            result += parseInt(array[i + 1])
        }
        else if (array[i] === '-'){
            result -= parseInt(array[i + 1])
        }
        else if (array[i] === '/'){
            result /= parseInt(array[i + 1])
        }
        else if (array[i] === '*'){
            result *= parseInt(array[i + 1])
        }
    }

    document.getElementById("result").innerHTML = `${result.toFixed(2)}`
}