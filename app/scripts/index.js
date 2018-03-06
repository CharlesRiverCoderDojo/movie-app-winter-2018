const movieEvents = require('./movies/events.js');

// On document ready
$(() => {
  movieEvents.movieHandlers();
});
