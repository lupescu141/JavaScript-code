const button = document.getElementById("start");

function calculator(calculation) {
  return new Function('return ' + calculation)();
}

button.onclick = () =>{
    const calculation = document.getElementById("calculation");
    console.log(calculator(calculation.value));
}

