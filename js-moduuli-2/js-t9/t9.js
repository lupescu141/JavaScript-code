const number_array = [4, 7, 2];

const even = (number_array) =>{

    let new_array = [];

    for (const numberArrayElement of number_array) {

        if ((numberArrayElement %2) === 0){
            new_array.push(numberArrayElement);
        }
    }
    return new_array
}

const even_array = even(number_array);
console.log(number_array);
console.log(even_array);