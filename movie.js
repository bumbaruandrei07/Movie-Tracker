class Movie {

    constructor(name, description, image, releasedYear, rating, addedDate) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.releasedYear = releasedYear;
        this.rating = rating;
        this.addedDate = new Date(addedDate);
    }

    getTimeElapsed() {

        const ONE_SECOND = 1000; // 1000 miliseconds = 1 second
        const ONE_MINUTE = ONE_SECOND * 60;
        const ONE_HOUR = ONE_MINUTE * 60;
        const ONE_DAY = ONE_HOUR * 24;

        const now = new Date();
        const elapsedMilliseconds = now.getTime() - this.addedDate.getTime();

        if (elapsedMilliseconds < ONE_MINUTE) {
            const elapsedSeconds = Math.floor(elapsedMilliseconds / ONE_SECOND);
            if (elapsedSeconds === 1) {
                return `Added ${elapsedSeconds} second ago`;
            } else {
                return `Added ${elapsedSeconds} seconds ago`;
            }

        } if (elapsedMilliseconds < ONE_HOUR) {
            const elapsedMinutes = Math.floor(elapsedMilliseconds / ONE_MINUTE);
            if (elapsedMinutes === 1) {
                return `Added ${elapsedMinutes} minute ago`;
            }
            else {
                return `Added ${elapsedMinutes} minutes ago`;
            }

        } if (elapsedMilliseconds < ONE_DAY) {
            const elapsedHours = Math.floor(elapsedMilliseconds / ONE_HOUR);
            if (elapsedHours === 1) {
                return `Added ${elapsedHours} hour ago`;
            } else {
                return `Added ${elapsedHours} hours ago`;
            }
        } else {
            const elapsedDays = Math.floor(elapsedMilliseconds / ONE_DAY);
            if (elapsedDays === 1) {
                return `Added ${elapsedDays} day ago`;
            } else {
                return `Added ${elapsedDays} days ago`;
            }

        }
    }

    renderMovie() {
        const movieList = document.querySelector('#movie-list');
        const timeElapsed = this.getTimeElapsed();
        movieList.innerHTML += `
            <li class="movie">
                <p>Name: ${this.name}</p>
                <p>Description: ${this.description}</p>
                <p>Released year: ${this.releasedYear}</p>
                <p>Rating: ${this.rating}</p>
                <p>Added date: ${this.addedDate} ${timeElapsed}</p>
                <img src = "${this.image}">
            </li>
        `;
    }

    renderMovieAsTable() {
        const movieTable = document.querySelector('#movie-table');
        const timeElapsed = this.getTimeElapsed();
        movieTable.innerHTML += `
    <tr class="movie">
      <td>${this.name}</td>
      <td>${this.description}</td>
      <td>${this.releasedYear}</td>
      <td>${this.rating}</td>
      <td>${this.addedDate} ${timeElapsed}</td>
      <td><img src="${this.image}" alt="${this.name}"></td>
    </tr>
         `;
    }
}