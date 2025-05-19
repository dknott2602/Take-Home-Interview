// API 1 https://www.omdbapi.com/?apikey=8855abea&s=fast

let movies;

async function renderMovies(filter) {
    const moviesWrapper = document.querySelector('.movies')

    moviesWrapper.classList += ' movies__loading'

    
    moviesWrapper.classList.remove('movies__loading')

    if (filter === 'A_Z') {
        movies.sort((a, b));
    }
    else if (filter === 'Z_A') {
        movies.sort((a, b));
    }
    else if (filter === 'YEAR') {
        movies.sort((a, b) => b.year - a.year);
    }

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=8855abea&s=fast`
    );
    const data = await response.json();
    console.log(data.search)

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

