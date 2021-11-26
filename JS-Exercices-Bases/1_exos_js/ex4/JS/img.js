const article1 = document.querySelectorAll("article")[0];
console.log(article1);
// Attribution des styles d'arrière plan des divs
article1.children[0].style.background =
	"url(./images/paysage_1.jpg) 50% 50% no-repeat";
article1.children[1].style.background =
	"url(./images/paysage_2.jpg) 50% 50% no-repeat";

article1.addEventListener("click", function () {
	this.querySelectorAll("div").forEach((element) => {
		element.classList.toggle("invisible");
	});
});
