'use strict';

const prettyPrintMovies = (object) => {
  let result = '';
  $.each(object, function(k, v) {
    result += `<li class="movies">${v.title}</li>`;
  });
  return result;
}

const movieSearchSuccess = (data) => {
  console.log(data);
  $('.popular-movies-wrapper').addClass('hidden');
  if (data.length != 0) {
    $('#search-results').html(prettyPrintMovies(data));
  } else {
    $('#search-results').html('<p>Your search returned nothing. Please try again.</p>')
  }

}

const showPopularMoviesSuccess = (data) => {
  $('#popular-movies').html(prettyPrintMovies(data));
}

module.exports = {
  movieSearchSuccess,
  showPopularMoviesSuccess
};
