// la selection du texte
const article = document.querySelector("#article");

//Stockaqge du contenu inital du texte
const contenuOriginal = article.innerHTML;

// la selection du champ de saisie
const inputMotRechercher = document.querySelector("#searchTerm");

// La selection du bouton pour rechercher le mot saisi
const btnRechercher = document.querySelector("#searchButton");

// La selection du message
const message = document.querySelector("#resultMessage");

//Fontions Utilitaires

/**
 *
 * @returns récupère la valuer du champ de saisi tout en éliminant les possibles espaces
 */
function recupererMorChercher() {
  return inputMotRechercher.value.trim();
}

/**
 *
 * @param {string} texte le message à afficher dans le DOM
 */
function afficherMessage(texte) {
  message.textContent = texte;
}

/**
 * @description Restaure le contenu original de l'article après une quelconque modification à l'exemple du surlignage
 */
function revenirAArticle() {
  article.innerHTML = contenuOriginal;
}

//Fonction Principale

/**
 *
 * @param {string} mot le mot sélectionner dans le texte après que l'on ait saisi
 * @param {string} texte le mot est remplacé par une balise de surlignement
 * @returns
 */
function surlignerMot(mot, texte) {
  const masque = new RegExp(`\\b(${mot})\\b`, "gi");
  return texte.replace(masque, `<mark>$1</mark>`);
}

/**
 *
 * @param {string} mot mot à rechercher dans l'article saisi dans le champ
 * @returns une promesse pour simuler une attente de 2 secondes avant d'avoir le resultat
 */
async function rechercherMotDansArticle(mot) {
  return new Promise((resolve) => {
    // simuler une attente de 2 secondes avant de retourner le résultat
    setTimeout(() => {
      const masque = new RegExp(`\\b${mot}\\b`, "i");
      resolve(masque.test(article.textContent));
    }, 2000);
  });
}

async function gererRecherche() {
  const motRecherche = recupererMorChercher();
  if (motRecherche === "") {
    afficherMessage("Veillez saisir le mot à rechercher");
    return;
  } else afficherMessage("Recherche en cours...");

  try {
    const motEstTrouve = await rechercherMotDansArticle(motRecherche);
    if (motEstTrouve) {
      article.innerHTML = surlignerMot(motRecherche, contenuOriginal);
      afficherMessage(`le mot ${motRecherche} a été trouvé dans le texte !!!`);
    } else {
      afficherMessage(
        `le mot ${motRecherche} n'a pas été trouvé dans le texte !!!`
      );
    }
  } catch (error) {
    afficherMessage("une erreur est survenue lors de la recherche");
  }
}

/**
 * @description gère le moment où je suis en train d'éffacer dans le champ de saisi
 */
function gererEffacement() {
  if (recupererMorChercher() === "") {
    revenirAArticle();
    afficherMessage("Veillez saisir le mot à rechercher");
  }
}

// Gestion du clic pour le bouton de recherche

btnRechercher.addEventListener("click", gererRecherche);

inputMotRechercher.addEventListener("input", gererEffacement);
