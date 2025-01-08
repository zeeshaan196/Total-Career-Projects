async function searchMovie() {
  const apiKey = '9359dafb';
  const searchInput = document.getElementById('searchInput').value;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'True') {
      displayMovie(data);
    } else {
      alert('Movie not found!');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayMovie(movie) {
  const movieDetails = document.getElementById('movieDetails');
  movieDetails.innerHTML = `
    <div class="movie">
      <img src="${movie.Poster}" alt="${movie.Title} Poster">
      <div>
        <p><strong>Title:</strong> ${movie.Title}</p>
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Rated:</strong> ${movie.Rated}</p>
        <p><strong>Released:</strong> ${movie.Released}</p>
        <p><strong>Runtime:</strong> ${movie.Runtime}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Writer:</strong> ${movie.Writer}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
      </div>
    </div>
  `;
}