let participants_count = parseInt(prompt("Enter number of participants"));
let participants = [];
let ol = document.getElementById("response");

for (let i = 0; i < participants_count ; i++) {
    participants.push(prompt(`${i + 1}/${participants_count} Enter participants name`));
}

participants.sort()

for (const participant of participants) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(participant));
    ol.appendChild(li);
}