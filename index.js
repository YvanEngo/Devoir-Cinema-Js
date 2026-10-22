const API_KEY ="569bfa75";

// REQUETE QUI RECUPERE LES DONNÉES

async function requete(titre, year){
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${titre}&y=${year}&plot=short`;
    const reponse = await fetch(url);
    const movie = await reponse.json();
    console.log(movie)
    return movie;
};
 // LES FILMS TENDANCES

requete("the beast","2026");
requete("hope","2026");
requete("masters of the universe","2026");


async function afficherfilm(){
    
    // TABLEAU DE FILMS TENDANCES

    const film1 = await requete("the beast","2026");
    const film2 = await requete("hope", "2026");
    const film3 = await requete("masters of the universe","2026");
    const moviesArray = [film1,film2,film3];   
    
    // LA BOUCLE PERMET DE REPETER LA CARTE POUR LES 3 FILMS
    
    for(const film of moviesArray){ 
    
    // LA STRUCTURE HTML

    const moviePoster = document.createElement("img");
    const movieTitle = document.createElement("h2");
    const moviePagelink = document.createElement("a");
    const movieShortPlot = document.createElement("p");
    const movieCard = document.createElement("article");
    const moviesContainer = document.querySelector("#moviesContainer");
    movieCard.append(moviePoster, movieTitle, moviePagelink, movieShortPlot);
    moviesContainer.appendChild(movieCard);

    //INSERTION DU CONTENU DANS LA STRUCTURE HTML

    moviePoster.src = film.Poster;
    moviePoster.alt =`Poster du film ${film.Title}`;

    movieTitle.textContent = film.Title;

    moviePagelink.textContent = "En savoir plus";
    moviePagelink.href = `../page movie/movie.html?id=${film.imdbID}`;

    movieShortPlot.textContent = film.Plot;
}


}
afficherfilm();

