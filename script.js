// Liste des boutons à afficher
const buttons = [
    { id: 1, label: "La réponse est psychose !" },
    { id: 2, label: "C quoi le genre de manga pour jeunes filles ?" },
    { id: 3, label: "c'est qui milo ?"},
];

const textes = [
    "après réfléxion, je dirais psychose",
    "c'est les hentais !!",
    "squelette très très menaçant"
];

// Fonction pour afficher les boutons
function displayButtons() {
    const container = document.getElementById('buttons-container');
    container.innerHTML = '';
    buttons.forEach((button, i) => {  // On utilise l'index de forEach
        const btn = document.createElement('button');
        btn.textContent = button.label;
        btn.addEventListener('click', () => {
            document.getElementById("imageachanger").src = `img/${i}.png`;
            document.getElementById("texteachanger").innerHTML = textes[i];
            if (button.id === 3) {
                document.body.classList.toggle('darkened');
            } else {
                document.body.classList.remove('darkened');
            }
        });
        container.appendChild(btn);
    });
}

// Afficher les boutons au chargement de la page
window.addEventListener('DOMContentLoaded', displayButtons);
