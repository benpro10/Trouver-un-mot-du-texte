const inputMotRechercher = document.querySelector("#searchTerm");
const motRechercher = inputMotRechercher.value;

const btnRechercher = document.querySelector("#searchButton");
const message = document.querySelector("#resultMessage");

// Promesse avant retour du resultat attendu

function resultatRechercher(motRechercher) {
  const promise = new promise((resolve, reject) => {
    // simuler une recherche asynchrone du mot dans le texte (exemple : un délai de 2 secondes avant de retourner le résultat)

    motRechercher.onload = () =>
      resolve("le mot ou la phrase" + motRechercher + "a été bien trouvé");
    motRechercher.error = () => reject(new Error("le mot n'a pas été trouvé"));
  });
  return promise;
}

// Recherche du mot et affichage du résultat





// btnRechercher.addEventListener("click", () => {
//   resultatRechercher(motRechercher)
//    .then((resultat) => {
//       message.textContent = resultat;
//     })
//    .catch((error) => {
//       message.textContent = error.message;
//     });
// });



// function fetchData(motRechercher) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (motRechercher === "error") {
//         reject("Erreur lors de la recherche");
//       } else {
//         resolve("Résultat de la recherche : " + motRechercher);
//       }
//     }, 1000);
//   });
// }
