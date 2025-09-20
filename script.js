// Liste des boutons à afficher
const buttons = [
    { id: 1, label: "La réponse est psychose !" },
    { id: 2, label: "C quoi le genre de manga pour jeunes filles ?" },
    { id: 3, label: "Bouton 3" },
    { id: 4, label: "Bouton 4" },
    { id: 5, label: "Bouton 5" },
];

const textes = [
    "après réfléxion, je dirais psychose",
    "c'est les hentais !!"
];

// Fonction pour afficher les boutons
function displayButtons() {
    const container = document.getElementById('buttons-container');
    container.innerHTML = '';
    buttons.forEach((button, i) => {  // On utilise l'index de forEach
        const btn = document.createElement('button');
        btn.textContent = button.label;
        btn.addEventListener('click', () => {
            // On utilise l'index pour choisir l'image
            document.getElementById("imageachanger").src = `img/${i}.png`;
            document.getElementById("texteachanger").innerHTML = textes[i];
            // ou si tes images sont nommées différemment :
            // document.getElementById("imageachanger").src = `img/image_${i}.png`;
        });
        container.appendChild(btn);
    });
}

// Afficher les boutons au chargement de la page
window.addEventListener('DOMContentLoaded', displayButtons);
