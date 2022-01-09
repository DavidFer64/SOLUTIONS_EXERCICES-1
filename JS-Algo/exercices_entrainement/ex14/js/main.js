const tab = [49, 23, 99, 1, 78];
console.log(tab);

let tmp = 0;

// on parcourt tout le tableau
for (let i = 0; i < tab.length - 1; i++) {
	// on parcourt tout le tableau, sauf l'élément courant => tab[i]
	for (let j = i + 1; j < tab.length; j++) {
		// si on trouve une valeur inférieure à l'élément courant, on inverse les 2 valeurs
		if (tab[j] < tab[i]) {
			tmp = tab[i];
			tab[i] = tab[j];
			tab[j] = tmp;
		}
	}
}
console.log(tab);
