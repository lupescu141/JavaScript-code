const canditate_count = parseInt(prompt("Enter number of canditates"));
let canditate_array = [];

for (let i = 0; i < canditate_count ; i++) {

    const canditate_name = prompt(`Name for canditate ${i + 1}`);
    canditate_array.push(
        {
            name: canditate_name,
            votes: 0
        }
    )
}

const voters_count = parseInt(prompt("Enter number of voters"))

for (let i = 0; i < voters_count; i++) {

    voters_canditate = prompt(`Wich canditate does voter ${i + 1} vote for`);

    for (const canditateArrayElement of canditate_array) {

        if (voters_canditate === canditateArrayElement.name){
            canditateArrayElement.votes ++;
        }
    }
}

canditate_array.sort((a, b) => {
   return b.votes - a.votes;
});

console.log(`The winner is ${canditate_array[0].name} with ${canditate_array[0].votes} votes.`)
console.log("result:")

for (const canditateArrayElement of canditate_array) {
    console.log(`${canditateArrayElement.name}: ${canditateArrayElement.votes} votes`)
}