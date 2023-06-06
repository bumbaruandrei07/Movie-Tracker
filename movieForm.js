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
   
    <label for='releasedYear'>Released year:</label>
    <input type ='number' name= 'releasedYear' id = 'releasedYear'>

    <label for='rating'>Movie rating:</label>
    <input type = 'number' name = 'rating' id = 'rating' step=".1">

    <label for='addedDate'>Added Date:</label>
    <input type='datetime-local' name ='addedDate' id='addedDate'>
  
    <input type ='submit' id ="submit">
    
</form>
`;

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

    const now = new Date();
    const addedDateInput = document.querySelector('#addedDate');
    const addedDateValue = new Date(addedDateInput.value);


    if (addedDateValue > now) {
      alert('Nu puteți selecta o dată ulterioară zilei curente!');
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