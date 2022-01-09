const idBdd = "toto";
const mdpBdd = "toto";
// let message = "";

// const id = prompt("Votre identifiant :");
// const mdp = prompt("Votre mot de passe :");

// if (idBdd === id && mdpBdd === mdp) {
// 	message = "ok";
// } else {
// 	message = "ko";
// }

// alert(message);

// let id = "";
// let mdp = "";
// while (idBdd !== id && mdpBdd !== mdp) {
// 	id = prompt("Votre identifiant :");
// 	mdp = prompt("Votre mot de passe :");
// }
// alert("ok");

let id = "";
let mdp = "";
let nbEssais = 0;
let reussite = false;

while (!reussite) {
	id = prompt("Votre identifiant :");
	mdp = prompt("Votre mot de passe :");
	if (idBdd === id && mdpBdd === mdp) {
		reussite = true;
	}
	nbEssais++;
	if (nbEssais >= 3) {
		break;
	}
	console.log(nbEssais);
}
if (nbEssais < 3) {
	alert("ok");
} else {
	alert("ko");
}
