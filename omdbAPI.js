function fetchMovieData(title) {
  const apiKey = 'cfe92185'; //generated and validated apikey from http://www.omdbapi.com/apikey.aspx 
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}