root.innerHTML += `
<form id = 'add-movie'>
    <h1> Add a new movie </h1>
    <label for='name'>Name:</label>
    <input type='text' name='name' id='name'>
    <label for='description'>Description:</label>
    <input type='text' name='description' id='description'>
    <label for='file'>Choose file to upload</label>
    <input type = 'file' name='img' id = 'img' accept = 'image/png, image/jpg'>
    <img id='preview' src='' style='display: none;' alt=''>
    <label for='releaseYear'>Release year:</label>
    <input type ='number' name= 'releaseYear' id = 'releaseYear'>
    <label for='rating'>Movie rating:</label>
    <input type = 'number' name = 'rating' id = 'rating' step=".1">
    <label for='addedDate'>Added Date:</label>
    <input type='datetime-local' name ='addedDate' id='addedDate'>
    <input type ='submit' id ='submit'>
    <input type='reset' value='Clear' id='clear-btn'>
</form>
`;

function validateMovieName(name) {
  if (name.trim().length === 0) {
    alert("Movie name must contains at least one character!");
    return false;
  }
  return true;
}

function validateDescriptionMovie(description) {
  if (description.length < 4) {
    alert("Movie description must contains at least 4 characters!");
    return false;
  }
  return true;
}

function isMovieImageSelected(image) {
  if (!image) {
    alert("You must select an image!");
    return false;
  }
  return true;
}

function validateReleaseYear(releaseYear) {
  // we get the value of the current year 
  const currentDate = new Date().getFullYear();
  // we parse the value of current year as a number beacuse releaseYear is a number type
  const parsedReleaseYear = parseInt(currentDate, 10);
  if (!releaseYear) {
    alert("You must select the release year!");
    return false;
  }
  else if (releaseYear > parsedReleaseYear) {
    alert("Release year cannot be after current year");
    return false;
  }
  else if (releaseYear < 1920) {
    alert("Release year must be after 1920");
    return false;
  }
  return true;
}

function validateRating(rating) {
  if (!rating) {
    alert("You must select the rating!");
    return false;
  }
  if (rating < 1 || rating > 10) {
    alert("Rating must be a positive value between 1 and 10!");
    return false;
  }
  return true;
}

function validateDate(date) {
  const now = new Date();
  const lowerLimit = new Date('1920-01-01');
  if (isNaN(date)) {
    alert("You must select the added date!");
    return false;
  }
  else if (date > now) {
    alert("You cannot select a date later than the current day!");
    return false;
  }
  else if (date < lowerLimit) {
    alert("You cannot a date before 1920");
    return false;
  }
  return true;
}

function addFormFunctionality() {
  const form = document.querySelector('#add-movie');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;

    const fileInput = document.querySelector('#img');
    const img = fileInput.files[0];
    const reader = new FileReader();

    const releaseYear = document.querySelector('#releaseYear').value;
    const rating = document.querySelector('#rating').value;

    const addedDateInput = document.querySelector('#addedDate');
    const addedDateValue = new Date(addedDateInput.value);

    if (!validateMovieName(name)) {
      return;
    }

    if (!validateDescriptionMovie(description)) {
      return;
    }

    if (!validateReleaseYear(releaseYear)) {
      return;
    }

    if (!validateRating(rating)) {
      return;
    }

    if (!validateDate(addedDateValue)) {
      return;
    }

    //  reader object of FileReader class reads files asynchronously
    //  we can only access its result in the onload event handler
    reader.onload = function (event) {
      const base64Image = event.target.result;
      const previewImage = document.querySelector('#preview');
      previewImage.src = base64Image;
      previewImage.style.display = 'block';

      const newMovie = {
        name: name,
        description: description,
        image: base64Image,
        releaseYear: releaseYear,
        rating: rating,
        addedDate: addedDateValue
      };

      // Retrieving products from localStorage
      const localStorageMovies = getMovies();
      // Adding a new movie to the list
      localStorageMovies.push(newMovie);
      // Adding the modified array to localStorage
      setMovies(localStorageMovies);
      renderMovieList(localStorageMovies);
    };

    if (!isMovieImageSelected(img)) {
      return;
    }

    reader.readAsDataURL(img);
  });
}

function attachClearButton() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearForm);
}

window.addEventListener('load', function () {
  addFormFunctionality();
  attachClearButton();
});