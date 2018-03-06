'use strict'

const api = require('./api');
const ui = require('./ui');

const onMovieSearch = (event) => {
  event.preventDefault();
  let search = document.getElementById('movie-keywords').value;
  let data = document.getElementById('movie-keywords').value;
  $('#search-header').text('Search results for: ' + `${search}`)
  api.movieSearch(search, data)
  .then(ui.movieSearchSuccess)
  .catch(error => console.error(error));
};

const onShowPopularMovies = () => {
  api.showPopularMovies()
  .then(ui.showPopularMoviesSuccess)
  .catch(error => console.error(error));
};

const movieHandlers = () => {
  $().ready(onShowPopularMovies);
  $('#search-movies').on('click', onMovieSearch)
};

module.exports = {
  movieHandlers,
  onMovieSearch,
  onShowPopularMovies
};
