let message = "C'est parti !";
const tropPetit = "Trop petit";
const tropGrand = "Trop grand";
const gagne = "Gagné !";
let boolGagne = false;
let play = true;
let nbCoups = 0;
let nbPartiesGagnees = 0;
let nbCoupsTotal = 0;

while (play) {
	const nombre = Math.floor(Math.random() * 100);
	console.log(nombre);
	nbCoups = 0;
	while (!boolGagne) {
		let essai = prompt(
			message + "\n\nVeuillez saisir un nombre entre 1 et 100 :"
		);
		essai = parseInt(essai);
		nbCoups++;
		if (essai > nombre) {
			message = tropGrand;
			console.log(essai + " => " + tropGrand);
		} else if (essai < nombre) {
			message = tropPetit;
			console.log(essai + " => " + tropPetit);
		} else {
			boolGagne = true;
			nbPartiesGagnees++;
			nbCoupsTotal += nbCoups;
		}
	}
	boolGagne = false;
	play = confirm(`Gagné en ${nbCoups} coups ! \n\nVoulez-vous rejouer ?`);
}
console.log("FIN");
console.log(`${nbPartiesGagnees} parties gagnées en ${nbCoupsTotal} coups !`);
