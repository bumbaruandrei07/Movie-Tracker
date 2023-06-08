root.innerHTML += `
<h1 class = "btn-options"> CHOOSE AN OPTION </h1>
<div class = "ascButtons">
    <button id="sort-by-ascending-rating">Sort by ascending rating</button>
    <button id="sort-by-ascending-name">Sort by ascending name</button>
    <button id="sort-by-ascending-year">Sort by ascending release date</button>
    <button id="sort-by-ascending-added-date">Sort by ascending date added</button>
    <div class = "ascButtons">
`;

function sortMoviesAsc(sortType) {
    switch (sortType) {
        // sort by rating button is pressed
        case "SORT_BY_RATING":
            const localStorageMoviesRating = getMovies();
            const sortedArrayByRating = localStorageMoviesRating.sort((movie1, movie2) => {
                return movie1.rating - movie2.rating;

            });
            //Movies are added to localStorage
            setMovies(sortedArrayByRating);
            // Movies are displayed
            renderMovieList(sortedArrayByRating);
            // renderMovieTable(sortedArrayByRating);
            break;

        case "SORT_BY_NAME":
            const localStorageMoviesName = getMovies();
            const sortedArrayByName = localStorageMoviesName.sort((movie1, movie2) => {
                if (movie1.name < movie2.name) {
                    return -1;
                } else if (movie1.name > movie2.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setMovies(sortedArrayByName);
            renderMovieList(sortedArrayByName);
            // renderMovieTable(sortedArrayByName);
            break;
        case "SORT_BY_RELEASED_YEAR":
            const localStorageMoviesReleasedYear = getMovies();
            const sortedArrayByReleasedYear = localStorageMoviesReleasedYear.sort((movie1, movie2) => {
                // If the first element is smaller, a negative number is returned, which means that the elements will not be changed.            
                if (movie1.releasedYear < movie2.releasedYear) {
                    return -1;

                } else if (movie1.releasedYear > movie2.releasedYear) {
                    return 1;

                } else {
                    return 0;
                }

            });
            setMovies(sortedArrayByReleasedYear);
            renderMovieList(sortedArrayByReleasedYear);
            // renderMovieTable(sortedArrayByReleasedYear);
            break;

        case "SORT_BY_ADDED_DATE":
            const localStorageMoviesAddedDate = getMovies();
            const sortedArrayByAddedDate = localStorageMoviesAddedDate.sort((movie1, movie2) => {
                if (movie1.addedDate < movie2.addedDate) {
                    return -1;
                } else if (movie1.addedDate > movie2.addedDate) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setMovies(sortedArrayByAddedDate);
            renderMovieList(sortedArrayByAddedDate);
            // renderMovieTable(sortedArrayByAddedDate);
            break;
    }
}

function addAscendingSortingFunctionality() {

    const sortByRating = document.querySelector('#sort-by-ascending-rating');
    const sortByName = document.querySelector('#sort-by-ascending-name');
    const sortByReleasedYear = document.querySelector('#sort-by-ascending-year');
    const sortByAddedDate = document.querySelector('#sort-by-ascending-added-date');
    sortByRating.addEventListener('click', () => {
        sortMoviesAsc('SORT_BY_RATING');
    })

    sortByName.addEventListener('click', () => {
        sortMoviesAsc('SORT_BY_NAME');
    })

    sortByReleasedYear.addEventListener('click', () => {
        sortMoviesAsc('SORT_BY_RELEASED_YEAR');
    })

    sortByAddedDate.addEventListener('click', () => {
        sortMoviesAsc('SORT_BY_ADDED_DATE');
    })
}

window.addEventListener('load', addAscendingSortingFunctionality);