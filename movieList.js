root.innerHTML += `
    <h2>Movies:</h2>
    <ul id="movie-list"></ul>
`;

function renderMovieList(movies) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const newMovie = new Movie(movie.name, movie.description, movie.image, movie.releasedYear, movie.rating, movie.addedDate);
        newMovie.renderMovie();
    });
}