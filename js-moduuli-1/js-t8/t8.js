
let ul = document.getElementById("response");
const start_year = prompt("Enter start year")
const end_year = prompt("Enter end year")

for (let i = parseInt(start_year); i <= parseInt(end_year) ; i++) {

    const option_a = i % 4;
    const option_b = i % 100;
    const option_c = i % 400;

    if (option_a === 0 && option_b > 0) {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${i}`))
        ul.appendChild(li)
    }

    else if (option_c === 0) {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${i}`))
        ul.appendChild(li)
    }
}