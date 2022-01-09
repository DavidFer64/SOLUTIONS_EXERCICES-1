// Récupérer tous les articles dans la section
const calculatrice = document.querySelectorAll("section article");
console.log(calculatrice);
const textResultat = document.querySelector("h1");
// Les cases
calculatrice.forEach((touche) => {
    touche.addEventListener("click", function () {
        // Traitement du texte de la calculatrice pour évaluer les opérations à mener
        if (touche.innerText == "=") {
            calculResultat(textResultat.innerText);
        } else if (touche.innerText == "CE") {
            init();
        } else {
            textResultat.innerText += touche.innerText;
        }
    });
});

// function clic(touche, index) {
//     touche.addEventListener("click", function () {
//         // Traitement du texte de la calculatrice pour évaluer les opérations à mener
//         if (this.innerText == "=") {
//             calculResultat(textResultat.innerText);
//         } else if (this.innerText == "CE") {
//             init();
//         } else textResultat.innerText += this.innerText;
//     });
// }
// Fonction d'initialisation pour annuler tout
function init() {
    textResultat.innerText = "";
}

// Fonction de calcul des résultats
function calculResultat(val) {
    textResultat.innerText += "=" + eval(val);
}

// Gestion du clavier
addEventListener("keydown", function (e) {
    console.log(e.key);
    // Test sur la touche majuscule enfoncée
    // if (e.shiftKey) {
    // On valide qu'il sagit bien des bonnes touches avec les keycodes
    if (
        (e.key >= 1 && e.key <= 9) ||
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/"
    ) {
        textResultat.innerText += e.key; // ajout des valeurs dans le champ de calcul
        console.log(e.currentTarget);
    }
    // }
    else if (e.key == "Enter") {
        calculResultat(textResultat.innerText); // Lancement des résultats avec la touche =
    } else if (e.key == "Delete") {
        init();
    }
});
