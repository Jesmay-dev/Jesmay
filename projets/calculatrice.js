const ecran =
document.getElementById(
"ecran"
);

function ajouter(valeur){

ecran.value += valeur;

}

function effacer(){

ecran.value="";

}

function retour(){

ecran.value=
ecran.value.slice(
0,
-1
);

}

function calculer(){

try{

let expression=
ecran.value;

expression=
expression.replace(
/\^/g,
"**"
);

ecran.value=
eval(expression);

}

catch{

ecran.value=
"Erreur";

}

}

function racine(){

try{

ecran.value=
Math.sqrt(
eval(
ecran.value
)
);

}

catch{

ecran.value=
"Erreur";

}

}

function carre(){

try{

let n=
eval(
ecran.value
);

ecran.value=
n*n;

}

catch{

ecran.value=
"Erreur";

}

}

function puissance(){

ajouter("^");

}

function pourcentage(){

try{

ecran.value=
eval(
ecran.value
)/100;

}

catch{

ecran.value=
"Erreur";

}

}

function sin(){

try{

let angle=
eval(
ecran.value
);

ecran.value=
Math.sin(
angle*
Math.PI/
180
);

}

catch{

ecran.value=
"Erreur";

}

}

function cos(){

try{

let angle=
eval(
ecran.value
);

ecran.value=
Math.cos(
angle*
Math.PI/
180
);

}

catch{

ecran.value=
"Erreur";

}

}

function tan(){

try{

let angle=
eval(
ecran.value
);

ecran.value=
Math.tan(
angle*
Math.PI/
180
);

}

catch{

ecran.value=
"Erreur";

}

}

function log(){

try{

ecran.value=
Math.log10(
eval(
ecran.value
)
);

}

catch{

ecran.value=
"Erreur";

}

}

function ln(){

try{

ecran.value=
Math.log(
eval(
ecran.value
)
);

}

catch{

ecran.value=
"Erreur";

}

}

function pi(){

ecran.value+=
Math.PI;

}

function factorielle(){

try{

let n=
parseInt(
eval(
ecran.value
)
);

let resultat=1;

for(
let i=1;
i<=n;
i++
){

resultat *= i;

}

ecran.value=
resultat;

}

catch{

ecran.value=
"Erreur";

}

}