const canvas = document.getElementById("jeu");
const ctx = canvas.getContext("2d");

const tailleCase = 20;

let serpent = [
{ x:200, y:200 }
];

let nourriture = {
x:100,
y:100
};

let direction = "RIGHT";

let score = 0;

function dessiner(){

ctx.fillStyle="#111";
ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle="lime";

serpent.forEach(partie=>{

ctx.fillRect(
partie.x,
partie.y,
tailleCase,
tailleCase
);

});

ctx.fillStyle="red";

ctx.fillRect(
nourriture.x,
nourriture.y,
tailleCase,
tailleCase
);

}

function bouger(){

let tete = {
x:serpent[0].x,
y:serpent[0].y
};

if(direction==="RIGHT"){
tete.x+=tailleCase;
}

if(direction==="LEFT"){
tete.x-=tailleCase;
}

if(direction==="UP"){
tete.y-=tailleCase;
}

if(direction==="DOWN"){
tete.y+=tailleCase;
}

if(
tete.x<0 ||
tete.y<0 ||
tete.x>=canvas.width ||
tete.y>=canvas.height
){
clearInterval(jeu);
alert("Game Over !");
return;
}

for(let partie of serpent){

if(
tete.x===partie.x &&
tete.y===partie.y
){
clearInterval(jeu);
alert("Game Over !");
return;
}

}

serpent.unshift(tete);

if(
tete.x===nourriture.x &&
tete.y===nourriture.y
){

score++;

document.getElementById(
"score"
).innerText=score;

nourriture={

x:Math.floor(
Math.random()*20
)*20,

y:Math.floor(
Math.random()*20
)*20

};

}
else{

serpent.pop();

}

dessiner();

}

document.addEventListener(
"keydown",
function(event){

if(
event.key==="ArrowRight"
&& direction!=="LEFT"
){

direction="RIGHT";

}

if(
event.key==="ArrowLeft"
&& direction!=="RIGHT"
){

direction="LEFT";

}

if(
event.key==="ArrowUp"
&& direction!=="DOWN"
){

direction="UP";

}

if(
event.key==="ArrowDown"
&& direction!=="UP"
){

direction="DOWN";

}

}
);

function recommencer(){

location.reload();

}

dessiner();

let jeu=setInterval(
bouger,
150
);