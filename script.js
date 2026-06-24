function horloge(){

let date = new Date();

document.getElementById(
"heure"
).innerHTML =
date.toLocaleTimeString();

}

setInterval(horloge,1000);


function messageParents(){

alert(
"Papa et Maman, ceci est seulement le début. Je veux continuer à apprendre et créer encore plus de projets ❤️"
);

}


function envoyer(){

alert(
"Message envoyé avec succès"
);

}


function changerMode(){

document.body.classList.toggle(
"light"
);

}