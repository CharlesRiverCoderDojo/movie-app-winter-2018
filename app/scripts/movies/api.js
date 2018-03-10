'use strict';

const app = require('../app.js');

const movieSearch = (search) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/movies/?q=' + search,
      method: 'GET',
      data: search,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const showPopularMovies = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/popular-movies',
      method: 'GET',
      headers: {
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};


module.exports = {
  movieSearch,
  showPopularMovies
};
