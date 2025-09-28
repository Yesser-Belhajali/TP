console.log("Bienvenue dans mon application de gestion de tâches!!!!")
let taches = JSON.parse(localStorage.getItem("taches") || "[]");

function ajouterTache() {
    let texte = document.getElementById("inp1").value.trim();
    if (!texte) return;

    taches.push({ texte, achevee: false });
    document.getElementById("inp1").value="";
    sauvegarder();
    afficherTaches();
}

function supprimerTache(index) {
    taches.splice(index, 1);
    sauvegarder();
    afficherTaches();
}

function terminerTache(index) {
    taches[index].achevee=!taches[index].achevee;
    sauvegarder();
    afficherTaches();
}

function sauvegarder() {
    localStorage.setItem("taches", JSON.stringify(taches));
}

function afficherTaches(filtre="") {
    let liste=document.getElementById("listeTaches");
    liste.innerHTML="";
    let compteurFini=0;
    taches.forEach((t, i) => {
        if (t.texte.toLowerCase().includes(filtre.toLowerCase())) {
            let li = document.createElement("li");
            li.textContent = t.texte;
            if (t.achevee) {
                li.classList.add("achevee");
                compteurFini++;
            }
            let btnTerminer = document.createElement("button");
            btnTerminer.textContent = "Terminer";
            btnTerminer.className = "terminer";
            btnTerminer.addEventListener("click", () => terminerTache(i));
            let btnSupprimer = document.createElement("button");
            btnSupprimer.textContent = "Supprimer";
            btnSupprimer.className = "supprimer";
            btnSupprimer.addEventListener("click", () => supprimerTache(i));
            li.appendChild(btnTerminer);
            li.appendChild(btnSupprimer);
            liste.appendChild(li);
        }
    });
    let compteur = document.getElementById("compteur");
    compteur.textContent = `Tâches terminées : ${compteurFini} / ${taches.length}`;
}

function toutSupprimer() {
    taches = [];
    sauvegarder();
    afficherTaches();
}

window.onload = function() {
    afficherTaches();

    document.getElementById("b1").addEventListener("click", ajouterTache);
    document.getElementById("inp1").addEventListener("keydown", e => { if (e.key==="Enter") ajouterTache(); });
    document.getElementById("supprimerTout").addEventListener("click", toutSupprimer);
    document.getElementById("recherche").addEventListener("input", e => afficherTaches(e.target.value));
};
