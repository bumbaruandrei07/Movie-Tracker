root.innerHTML += `
    <h2>Movies:</h2>
    <ul id="movie-list"></ul>
     <table id="movie-table"></table>
    
`;

const switchViewButton = document.querySelector('#switch-view');

function renderMovieList(movies) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const newMovie = new Movie(movie.name, movie.description, movie.image, movie.releasedYear, movie.rating, movie.addedDate);
        newMovie.renderMovie();
    });
}

function renderMovieTable(movies) {
    const movieTable = document.querySelector('#movie-table');
    movieTable.innerHTML = '';
    movies.forEach(movie => {
        const newMovie = new Movie(movie.name, movie.description, movie.image, movie.releasedYear, movie.rating, movie.addedDate);
        newMovie.renderMovieAsTable();
    });
}


switchViewButton.addEventListener('click', startRenderingTable);