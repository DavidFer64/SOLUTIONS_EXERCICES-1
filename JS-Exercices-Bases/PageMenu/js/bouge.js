// Identification des éléments du menu
const menuCol = document.querySelector(".liste");
const menuLigne = document.querySelector(".module");
const menuMax = document.querySelector(".maximise");
// Récupérer le main pour changer sa classe
const main = document.querySelector("main");
// Vidéo à 100%
menuMax.addEventListener("click", function () {
	main.classList.toggle("videoMax");
});
// Vue en colonne
menuCol.addEventListener("click", function () {
	main.classList.remove("videoMax"); // important pour supprimer le position:absolute
	main.classList.add("vueColonne");
});
// Vue en ligne (par défaut)
menuLigne.addEventListener("click", function () {
	main.classList.remove("videoMax"); // important pour supprimer le position:absolute
	main.classList.remove("vueColonne");
});
