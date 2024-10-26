// la selection du texte
const article = document.querySelector("#article");

// la selection du champ de saisie
const inputMotRechercher = document.querySelector("#searchTerm");

// La selection du bouton pour rechercher le mot saisi
const btnRechercher = document.querySelector("#searchButton");

// La selection du message
const message = document.querySelector("#resultMessage");

// Promesse avant retour du resultat attendu

function resultatRechercher(motRechercher) {
  return new Promise((resolve) => {
    // simuler une attente de 2 secondes avant de retourner le résultat
    setTimeout(() => {
      const masque = new RegExp(`\\b${motRechercher}\\b`, "i");
      const trouve = masque.test(article.textContent);
      resolve(trouve);
    }, 2000);
  });
}

// Gestion du clic pour le bouton de recherche

btnRechercher.addEventListener("click", async () => {
  const motCherche = inputMotRechercher.value.trim();
  if (motCherche === "") {
    message.textContent = "Veillez saisir le mot à rechercher";
    return;
  } else message.textContent = "Recherche en cours...";

  try {
    // Attendre le message de la promesse
    const motEstTrouve = await resultatRechercher(motCherche);

    if (motEstTrouve) {
      message.textContent = `le mot ${motCherche} a été trouvé dans le texte !!!`;
    } else {
      message.textContent = `le mot ${(motCherche)} n'a pas été trouvé dans le textze`;
    }
  } catch (error) {
    message.textContent = "une erreur a été trouvé lors de la recherche";
  }
});

inputMotRechercher.addEventListener("input", () => {
  if (inputMotRechercher.value.trim() === "") {
    message.textContent = "Veillez saisir le mot à rechercher";
  }
});
