document.getElementById("source").addEventListener("submit", function (submit_event){
    submit_event.preventDefault();
    const form_values = new FormData(submit_event.target);
    const props = Object.fromEntries(form_values);
    const string = JSON.stringify(props);
    const obj = JSON.parse(string);

    document.getElementById("target").innerHTML = `Your name is ${obj.firstname} ${obj.lastname}`;
})