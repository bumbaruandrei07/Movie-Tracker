const root = document.querySelector('#root');
const MOVIES_KEY = 'movies';

const images = [
    'images/harryPotter.jpg',
    'images/independenceDay.png',
    'images/starWars.jpg'
]

const movies = [
    {
        name: 'Harry Potter',
        description: 'Wizards fight against evil forces!',
        image: images[0],
        releasedYear: 2001,
        rating: 9,
        addedDate: new Date('2023-05-29')
    },
    {
        name: 'Independence Day',
        description: 'Aliens attack on earth!',
        image: images[1],
        releasedYear: 1996,
        rating: 8,
        addedDate: new Date('2023-05-30')
    },
    {
        name: 'Star Wars',
        description: 'Fight between jedi and siths!',
        image: images[2],
        releasedYear: 1977,
        rating: 9,
        addedDate: new Date('2023-05-31')
    }
];

// function used to extract the movies from localStorage
function getMovies() {
    // extract the value corresponding to the "movies" key
    const localStorageMovies = localStorage.getItem(MOVIES_KEY);
    // extract the value corresponding to the "movies" key
    const parsedMovies = JSON.parse(localStorageMovies);
    return parsedMovies;
}

// function used to add movies to localStorage
function setMovies(movies) {
    // the received parameter is transformed into a string
    const stringifiedMovies = JSON.stringify(movies);
    // set the corresponding value in localStorage
    localStorage.setItem(MOVIES_KEY, stringifiedMovies);
}

// if we don't have the movies in localStorage, then we add them
if (getMovies() === null){
    setMovies(movies);
}

function startRendering() {
    // Movies displayed on the screen are taken from localStorage
    const localStorageMovies = getMovies();
    renderMovieList(localStorageMovies);
}

function startRenderingTable() {
    const localStorageMovies = getMovies();
    renderMovieTable(localStorageMovies);
}
window.addEventListener('load', startRendering);