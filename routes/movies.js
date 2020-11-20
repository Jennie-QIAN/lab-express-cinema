const express = require('express');
const router = express.Router();

/* Movies page */
const Movie = require('../models/Movie.model.js');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => res.render('movies', { movies: moviesFromDB }))
    .catch(err => console.log(`Error while getting the movies from the DB: ${err}`));   
});

module.exports = router;