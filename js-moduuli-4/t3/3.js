const show_form = document.querySelector('#query').parentElement;
const result_location = document.getElementById("results");
show_form.addEventListener('submit', async function(event){

    event.preventDefault();
    result_location.innerHTML = "";
    const query = document.getElementById("query").value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        let jsonData = await response.json();

        console.log(jsonData);


        for (const jsonDataKey in jsonData) {

            const article = document.createElement("article");
            const h2 = document.createElement("h2");
            h2.appendChild(document.createTextNode(`${jsonData[jsonDataKey].show.name}`));
            article.insertAdjacentElement("beforeend", h2);
            const a = document.createElement("a");
            a.href= jsonData[jsonDataKey].show.url;
            a.appendChild(document.createTextNode(`${jsonData[jsonDataKey].show.url}`))
            a.target = "_blank";
            article.insertAdjacentElement("beforeend", a);
            const img = document.createElement("img");
            img.src = jsonData[jsonDataKey].show.image?.medium;
            img.alt = jsonData[jsonDataKey].show?.name;
            article.insertAdjacentElement("beforeend", img);
            article.innerHTML += jsonData[jsonDataKey].show.summary;
            result_location.appendChild(article);
        }

    } catch (error) {
        console.log(error.message);
    }

});