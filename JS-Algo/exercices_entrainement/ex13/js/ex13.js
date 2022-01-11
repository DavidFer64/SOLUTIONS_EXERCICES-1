const tableau = [12.2,54,82,100,48,64,33,24,64,17,99,14,64,0,-5,-56,-8,-12,8,-2];

const nbTrouve = 64;
let cpt = 0;

for(let nb of tableau){
    console.log(typeof(nb)+" / "+typeof(nbTrouve));
    if(nb === nbTrouve){
        cpt++;
    }
}
console.log(tableau);
console.log("Nombre d'occurences de "+nbTrouve+" : "+cpt);
