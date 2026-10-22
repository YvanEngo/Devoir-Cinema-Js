
const cleApi = "569bfa75";

const fullMovieDescription = document.querySelector("#movieDetailCard");

// PERMET DE Récupérer l'identifiant du film dans l'URL
const parametres = new URLSearchParams(window.location.search);// le browser recupere la partie des parametre de l'url apres ? l'url en question est celui qu'on a inscrit dans le lien "en savoir plus"
const idFilm = parametres.get("id");// ensuite get recupere la valeur du parametre appelé id.

async function afficherFilm() {
    const url = `https://www.omdbapi.com/?apikey=${cleApi}&i=${idFilm}&plot=full`;// la variable id film nous permet ensuite d'interroger l'api
    const response = await fetch(url);
    const film = await response.json();
    console.log(film)

    // STRUCTURE HTML

    const filmDescriptionCard = document.createElement("article");

    const filmTitle = document.createElement("h1");
    filmTitle.textContent = film.Title;

    const filmPoster = document.createElement("img");
    filmPoster.src = film.Poster;
    filmPoster.alt = `Affiche du film ${film.Title}`;

    const filmPlotFull = document.createElement("p");
    filmPlotFull.textContent = film.Plot;

    const filmGenre = document.createElement("p");
    filmGenre.textContent = film.Genre;

    const filmActors = document.createElement("p");
    filmActors.textContent = film.Actors;
    

    filmDescriptionCard.append(filmTitle,filmPoster,filmPlotFull,filmGenre,filmActors);

    fullMovieDescription.appendChild(filmDescriptionCard);
}

afficherFilm();