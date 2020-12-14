let names = [" et Thomas", " et Nicolas", " et Georges", " et Marc", " et Isabelle", " et Natacha", " et Paul", " et Laura", " et Florian", " et Phillipe"];
let object = [" un ordinateur", " un couteau", " un balai", " une cafetière", " une voiture", " un hélicoptère", " une pipe", " une fenêtre", " une clef", " une clope"];
let temperature = [" à 5°C", " à 15°C", " à 50°C", " à 40°C", " à 60°C", " à 80°C", " à -8000°C", " à -50°C", " à -1000°C", " à 69°C"];
let places = [" dans une cave", " dans une chambre", " dans une cuisine", " dans un garage", " chez UpTo", " dans un parc", " dans une salle de sport", " dans un chateau", " dans un magasin", " dans un comico"];
let verbs = [" ont mangé", " ont vendu", " ont acheté", " ont accroché", " ont pendu", " ont fait", " ont secouru", " ont épluché", " ont cuisiné", " ont fumé"];

let button = document.getElementById("user-submit");
let div = document.getElementById("container");
let input = document.getElementById("user-name");
let prenom = input.value;

button.addEventListener("click", function () {
    let para = document.createElement("p");
    para.style.fontSize = "2rem";
    let prenom = input.value;
    para.innerHTML = prenom + names[Math.trunc(Math.random()*10)] + verbs[Math.trunc(Math.random()*10)] + object[Math.trunc(Math.random()*10)] + temperature[Math.trunc(Math.random()*10)] + places[Math.trunc(Math.random()*10)];
    div.append(para);

})