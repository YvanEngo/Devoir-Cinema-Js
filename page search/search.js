

// REQUETE QUI RECUPERE LES DONNÉES OMDB
let pageActuelle = 1;// donne la page actuelle

async function requete(titre, page){
    const API_KEY ="569bfa75";
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titre}&page=${page}`;
    const reponse = await fetch(url);
    const movies = await reponse.json();
    console.log(movies.Search)
    return movies.Search;
};



async function afficherfilm(){
    
    // STOQUE LA REPONSE DE L'API
    const userSearchResults = await requete(userInput,pageActuelle);// c'est ici que la fonction requete reçoit l'entrée de l'ecouteur et la valeur de la page actuelle
    
    
    // LA BOUCLE PERMET DE REPETER LA CARTE 
    
    for(const film of userSearchResults){ 
    
    // LA STRUCTURE HTML
    const moviesContainer = document.querySelector("#searchResults");
    const moviePoster = document.createElement("img");
    const movieTitle = document.createElement("h2");
    const moviePagelink = document.createElement("a");
    const movieCard = document.createElement("article");
    
    movieCard.append(moviePoster, movieTitle, moviePagelink);
    moviesContainer.appendChild(movieCard);

    //INSERTION DU CONTENU DANS LA STRUCTURE HTML

    moviePoster.src = film.Poster;
    moviePoster.alt =`Poster du film ${film.Title}`;

    movieTitle.textContent = film.Title;

    moviePagelink.textContent = "En savoir plus";
    moviePagelink.href = `../page movie/movie.html?id=${film.imdbID}`;
    }
}

//CONNECTION ENTRE LA BARRE DE RECHERCHE ET LES DONNÉES OMDB
    
    //EVENT LISTENER
let userInput = ""; //recupere les entrées de l'utilisateur
const searchBar = document.querySelector("#searchbar");
searchBar.addEventListener("input",function(typing){
    userInput = typing.target.value;
    const moviesContainer = document.querySelector("#searchResults").innerHTML ="";//empeche les nouvelle page de remplacer les anciennes
    afficherfilm();
    
    } 
);

const afficherPlus = document.querySelector("#afficherPlus");
afficherPlus.addEventListener("click", function(){
   pageActuelle = pageActuelle + 1;
   afficherfilm();
    
}
);

