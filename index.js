// API 1 https://www.omdbapi.com/?apikey=8855abea&s=fast

let movies;

async function renderMovies(filter) {
    const moviesWrapper = document.querySelector('.movies')

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=8855abea&s=fast`
    );

    const data = await response.json();

    
    let movies = []
    
    if (filter === 'A_Z') {
        data.Search.sort((a, b) => b.Year - a.Year);
    }
    else if (filter === 'Z_A') {
        data.Search.sort((a, b) => a.Year - b.Year);
    }
    else if (filter === 'YEAR') {
        movies.sort((a, b) => Number(b.Year) - Number(a.Year));
    }
    
    
    const indexHtml = data.Search.map((movies) => {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
    <img class="movie__img" src="${movies.Poster}" alt="">
    </figure>
    <div class="movie__title">
        ${movies.Title}
    </div>
    <div class="movie__year">
        ${movies.Year}
    </div>
    </div>`
        })
    .join("");
        
    moviesWrapper.innerHTML = indexHtml    
}
    
function filterMovies(event) {
    renderMovies(event.target.value);
    }
    
setTimeout (() => {
    renderMovies();
});
    

moviesWrapper.classList += ' movies__loading'

    
    
moviesWrapper.classList.remove('movies__loading')


// console.log(data.Search)





