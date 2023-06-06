root.innerHTML += `
    <button id="sort-by-rating">Sorteaza dupa rating</button>
    <button id="sort-by-name">Sorteaza dupa nume</button>
    <button id="sort-by-year">Sorteaza dupa data lansarii</button>
    <button id="sort-by-added-date">Sorteaza dupa data adaugarii</button>
`;

function sortMovies(sortType) {
    switch (sortType) {
        // Cazul in care e apasat butonul de sortare dupa rating
        case "SORT_BY_RATING":
            const localStorageMoviesRating = getMovies();
            const sortedArray = localStorageMoviesRating.sort((elem1, elem2) => {
                // Daca primul element este mai mic, se returneaza un numar negativ, ceea ce insemana ca elementele nu vor fi schimbate.
                if (elem1.rating < elem2.rating) {
                    return -1;
                    // Elementele sunt schimbate.
                } else if (elem1.rating > elem2.rating) {
                    return 1;
                    // Elementele raman pe loc.
                } else {
                    return 0;
                }

            });
            // Adaugam filmele in localStorage
            setMovies(sortedArray);
            // Afisam filmele
            renderMovieList(sortedArray);
            break;

        // Cazul in care e apasat butonul de sortare dupa nume
        case "SORT_BY_NAME":
            const localStorageMoviesName = getMovies();
            const sortedArrayByName = localStorageMoviesName.sort((movie1, movie2) => {
                // Daca primul element este mai mic, se returneaza un numar negativ, ceea ce insemana ca elementele nu vor fi schimbate.
                if (movie1.name < movie2.name) {
                    return -1;
                    // Elementele sunt schimbate.
                } else if (movie1.name > movie2.name) {
                    return 1;
                    // Elementele raman pe loc.
                } else {
                    return 0;
                }

            });
            // Adaugam filmele in localStorage
            setMovies(sortedArrayByName);
            // Afisam filmele
            renderMovieList(sortedArrayByName);
            break;

        case "SORT_BY_RELEASED_YEAR":
            const localStorageMoviesReleasedYear = getMovies();
            const sortedArrayByReleasedYear = localStorageMoviesReleasedYear.sort((movie1, movie2) => {
                // Daca primul element este mai mic, se returneaza un numar negativ, ceea ce insemana ca elementele nu vor fi schimbate.
                if (movie1.releasedYear < movie2.releasedYear) {
                    return -1;
                    // Elementele sunt schimbate.
                } else if (movie1.releasedYear > movie2.releasedYear) {
                    return 1;
                    // Elementele raman pe loc.
                } else {
                    return 0;
                }

            });
            setMovies(sortedArrayByReleasedYear);
            // Afisam filmele
            renderMovieList(sortedArrayByReleasedYear);
            break;

        case "SORT_BY_ADDED_DATE":
            const localStorageMoviesAddedDate = getMovies();
            const sortedArrayByAddedDate = localStorageMoviesAddedDate.sort((movie1, movie2) => {
                // Daca primul element este mai mic, se returneaza un numar negativ, ceea ce insemana ca elementele nu vor fi schimbate.
                if (movie1.addedDate < movie2.addedDate) {
                    return -1;
                    // Elementele sunt schimbate.
                } else if (movie1.addedDate > movie2.addedDate) {
                    return 1;
                    // Elementele raman pe loc.
                } else {
                    return 0;
                }

            });
            setMovies(sortedArrayByAddedDate);
            // Afisam filmele
            renderMovieList(sortedArrayByAddedDate);
            break;

    }
}

function addSortingFunctionality() {
    // Cand se face click pe butonul de sortare dupa rating, se apeleaza functia de sortare.
    const sortByRating = document.querySelector('#sort-by-rating');
    const sortByName = document.querySelector('#sort-by-name');
    const sortByReleasedYear = document.querySelector('#sort-by-year');
    const sortByAddedDate = document.querySelector('#sort-by-added-date');
    sortByRating.addEventListener('click', () => {
        sortMovies('SORT_BY_RATING');
    })

    sortByName.addEventListener('click', () => {
        sortMovies('SORT_BY_NAME');
    })

    sortByReleasedYear.addEventListener('click', () => {
        sortMovies('SORT_BY_RELEASED_YEAR');
    })

    sortByAddedDate.addEventListener('click', () => {
        sortMovies('SORT_BY_ADDED_DATE');
    })
}

window.addEventListener('load', addSortingFunctionality);