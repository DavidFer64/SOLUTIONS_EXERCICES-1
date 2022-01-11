
let htmlTables = "";
const divTables = document.querySelector("#divTables");

// for (let i = 1; i <= 10; i++) {
//     document.writeln("<div>" + i + " x 2 = " + i * 2 + "</div>");
// }


// for (let i = 1; i <= 10; i++) {
//     htmlTables += "<div>";
//     for (let j = 1; j <= 10; j++) {
//         htmlTables += "<div>" + i + " x " + j + " = " + (i * j) + "</div>";
//     }
//     htmlTables += "</div>";
// }

for (let i = 1; i <= 10; i++) {
    let divTable = document.createElement("div");
    for (let j = 1; j <= 10; j++) {
        let divLigne = document.createElement("div");
        divLigne.innerHTML = i + " x " + j + " = " + (i * j);
        divTable.appendChild(divLigne);
    }
    divTables.appendChild(divTable);
}
