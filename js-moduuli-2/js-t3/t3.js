let dogs = []
let ul = document.getElementById("response")

for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`${i + 1}/6 Enter dogs name`))
}

dogs.sort().reverse()

for (const dog of dogs) {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(dog))
    ul.appendChild(li)
}
