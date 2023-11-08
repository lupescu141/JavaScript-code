const option = document.getElementById("operation");
const input_1 = document.getElementById("num1");
const input_2 = document.getElementById("num2");
const button = document.getElementById("start");
const result = document.getElementById("result");

button.onclick = () => {

    if (option.value === "add"){
        result.innerHTML = `${parseFloat(input_1.value) + parseFloat(input_2.value)}`;
    }

    else if (option.value === "sub"){
        result.innerHTML = `${parseFloat(input_1.value) - parseFloat(input_2.value)}`;
    }

    else if (option.value === "multi"){
        result.innerHTML = `${(parseFloat(input_1.value) * parseFloat(input_2.value)).toFixed(2)}`;
    }

    else if (option.value === "div"){
        result.innerHTML = `${(parseFloat(input_1.value) / parseFloat(input_2.value)).toFixed(2)}`;
    }
}