const img = document.getElementById("target");
const trigger = document.getElementById("trigger");

trigger.onmouseover = () => {
    img.src = "./img/picB.jpg"
}

trigger.onmouseleave = () => {
    img.src = "./img/picA.jpg"
}