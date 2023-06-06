const root = document.querySelector('#root');

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
        description: 'Fight between jedi and sith',
        image: images[2],
        releasedYear: 1977,
        rating: 9,
        addedDate: new Date('2023-05-31')
    }
];

// Functie folosita pentru a extrage filmele din localStorage
function getMovies() {
    // Extragem valoarea corespunzatoare cheii "movies".
    const localStorageMovies = localStorage.getItem("movies");
    // Transformam filmele din string in vector de obiecte.
    const parsedMovies = JSON.parse(localStorageMovies);
    // Returnam filmele.
    return parsedMovies;
}

// Functie folosita pentru a adauga filmele in localStorage
function setMovies(movies) {
    // Parametrul primit este transformat in sir de caracter.
    const stringifiedMovies = JSON.stringify(movies);
    // Setam valoarea corespunzatoare in localStorage.
    localStorage.setItem("movies", stringifiedMovies);
}

// Daca nu avem filmele in localStorage, atunci le adaugam.
if (getMovies() === null){
    setMovies(movies);
}

function startRendering() {
    // Filmele afisate pe ecran sunt preluate din localStorage.
    const localStorageMovies = getMovies();
    renderMovieList(localStorageMovies);
}
window.addEventListener('load', startRendering);