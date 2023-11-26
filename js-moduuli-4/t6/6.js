const show_form = document.querySelector('#query').parentElement;
const joke_location = document.getElementById("jokes");
show_form.addEventListener('submit', async function(event){

    event.preventDefault();
    joke_location.innerHTML = "";
    const query = document.getElementById("query").value;

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);

        for (const jsonDataKey in jsonData.result) {

            const article = document.createElement("article");
            const p = document.createElement("p");
            p.appendChild(document.createTextNode(`${jsonData.result[jsonDataKey].value}`));
            article.insertAdjacentElement("beforeend", p);
            joke_location.appendChild(article);

        }

    } catch (error) {

        console.log(error.message);
    }

});