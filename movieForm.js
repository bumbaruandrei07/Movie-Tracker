root.innerHTML += `
<form id = 'add-movie'>
    <h1> Add a new movie </h1>
    <label for='name'>Name:</label>
    <input type='text' name='name' id='name'>

    <label for='description'>Description:</label>
    <input type='text' name='description' id='description'>

    <label for='file'>Choose file to upload</label>
    <input type = 'file' name='img' id = 'img' accept = "image/png, image/jpg">
    <img id='preview' src='' style='display: none;' alt=''>
   
    <label for='releasedYear'>Release year:</label>
    <input type ='number' name= 'releasedYear' id = 'releasedYear'>

    <label for='rating'>Movie rating:</label>
    <input type = 'number' name = 'rating' id = 'rating' step=".1">

    <label for='addedDate'>Added Date:</label>
    <input type='datetime-local' name ='addedDate' id='addedDate'>
  
    <input type ='submit' id ="submit">
    
</form>
`;

function validateDate(date) {
  const now = new Date();
  if (date > now) {
    alert("You cannot select a date later than the current day!");
    return false;
  }
  return true;
}

function validateRating(rating) {
  if (rating <= 1 || rating > 10) {
    alert("Rating must be a positive value not grater than 10!");
    return false;
  }
  return true;
}

function validateReleasedYear(releasedYear) {
  //we get the value of the current year 
  const currentDate = new Date().getFullYear();
  //we parse the value of current year as a number beacuse releasedYear is a number type
  const parsedReleasedYear = parseInt(currentDate, 10);

  if (releasedYear > parsedReleasedYear || releasedYear < 1920) {
    alert("Released year cannot be after current year or before 1920!");
    return false;
  }
  return true;
}

function validateMovieName(name) {
  if (name.trim().length === 0) {
    alert("Movie name must contains at least one character!");
    return false;
  }
  return true;
}

function validateDescriptionMovie(description){
  if(description.length < 4){
    alert("Movie description must contains at least 4 characters!");
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

    const releasedYear = document.querySelector('#releasedYear').value;
    const rating = document.querySelector('#rating').value;

    const addedDateInput = document.querySelector('#addedDate');
    const addedDateValue = new Date(addedDateInput.value);

    if (!validateDate(addedDateValue)) {
      return;
    }

    if (!validateRating(rating)) {
      return;
    }

    if (!validateReleasedYear(releasedYear)) {
      return;
    }

    if(!validateMovieName(name)){
      return;
    }

    if(!validateDescriptionMovie(description)){
      return;
    }

    reader.onload = function (event) {
      const base64Image = event.target.result;
      const previewImage = document.querySelector('#preview');
      previewImage.src = base64Image;
      previewImage.style.display = 'block';
      const newMovie = {
        name: name,
        description: description,
        image: base64Image,
        releasedYear: releasedYear,
        rating: rating,
        addedDate: addedDateValue
      };

      const localStorageMovies = getMovies();
      localStorageMovies.push(newMovie);
      setMovies(localStorageMovies);
      renderMovieList(localStorageMovies);
    };

    reader.readAsDataURL(img);
  });
}

window.addEventListener('load', addFormFunctionality);