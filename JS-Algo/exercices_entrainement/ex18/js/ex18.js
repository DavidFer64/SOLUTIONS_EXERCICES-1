var nbSecondes = 7263;

var heures = Math.floor(nbSecondes/3600);
var minutes = Math.floor((nbSecondes%3600)/60);
var secondes = (nbSecondes%3600)%60;

console.log(heures+" h");
console.log(minutes+" mn");
console.log(secondes+" s");
