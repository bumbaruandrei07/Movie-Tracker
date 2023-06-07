function sortMoviesDesc(sortType) {
    switch (sortType) {
        case "SORT_BY_RATING":
            const localStorageMoviesRating = getMovies();
            const sortedArray = localStorageMoviesRating.sort((movie1, movie2) => {
                return movie2.rating - movie1.rating;

            });
          
            setMovies(sortedArray);
          
            renderMovieList(sortedArray);
            break;

        case "SORT_BY_NAME":
            const localStorageMoviesName = getMovies();
            const sortedArrayByName = localStorageMoviesName.sort((movie1, movie2) => {
                if (movie1.name < movie2.name) {
                    return 1;
                } else if (movie1.name > movie2.name) {
                    return -1;
                } else {
                    return 0;
                }
            });
            setMovies(sortedArrayByName);
            renderMovieList(sortedArrayByName);
            break;
        case "SORT_BY_RELEASED_YEAR":
            const localStorageMoviesReleasedYear = getMovies();
            const sortedArrayByReleasedYear = localStorageMoviesReleasedYear.sort((movie1, movie2) => {
                return movie2.releasedYear - movie1.releasedYear;

            });
            setMovies(sortedArrayByReleasedYear);
            renderMovieList(sortedArrayByReleasedYear);
            break;
       
        case "SORT_BY_ADDED_DATE":
            const localStorageMoviesAddedDate = getMovies();
            const sortedArrayByAddedDate = localStorageMoviesAddedDate.sort((movie1, movie2) => {
                if (movie1.addedDate > movie2.addedDate) {
                    return -1;
                } else if (movie1.addedDate < movie2.addedDate) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setMovies(sortedArrayByAddedDate);
            renderMovieList(sortedArrayByAddedDate);
            break;

    }
}

function addDescendingSortingFunctionality() {
   
    const sortByRating = document.querySelector('#sort-by-descending-rating');
    const sortByName = document.querySelector('#sort-by-descending-name');
    const sortByReleasedYear = document.querySelector('#sort-by-descending-year');
    const sortByAddedDate = document.querySelector('#sort-by-descending-added-date');
    sortByRating.addEventListener('click', () => {
        sortMoviesDesc('SORT_BY_RATING');
    })

    sortByName.addEventListener('click', () => {
        sortMoviesDesc('SORT_BY_NAME');
    })

    sortByReleasedYear.addEventListener('click', () => {
        sortMoviesDesc('SORT_BY_RELEASED_YEAR');
    })

    sortByAddedDate.addEventListener('click', () => {
        sortMoviesDesc('SORT_BY_ADDED_DATE');
    })
}

window.addEventListener('load', addDescendingSortingFunctionality);