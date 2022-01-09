var longueur = 10;
var largeur = 8;
var hauteur = 3;

function calculNbRad(long,larg,haut){
    let volume = long*larg*haut;
    return Math.ceil(volume/8);
}

document.writeln("Nombre de radiateurs pour chauffer "+(longueur*largeur*hauteur)+"m3 : "+calculNbRad(longueur,largeur,hauteur));