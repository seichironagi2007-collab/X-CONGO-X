let naissance = prompt("tu est née à la frontiere ? (oui/non)").toLowerCase();
let parent = prompt("tu as un parent congolais oui ou non ? (oui/non)").toLowerCase();
let langue = prompt("tu wazz en congolais ? (oui/non)").toLowerCase();
let carte = prompt("tu as un acte de naissance congolais ? (oui/non)").toLowerCase();

let score = 0;

if (naissance === "oui") score++;
if (parent === "oui") score++;
if (langue === "oui") score++;
if (carte === "oui") score++;

if (score >= 3) {
    alert("toi t es un enfoiré de congolais vv dbd");
} else if (score === 2) {
    alert("toi là t est peut etre congolais donc dgg");
} else {
    alert("toi t est pas un congolais dieu merci");
}