const express = require('express')
const { getTrendingMovie, getMovieTrailers, getMoviesByCategory, getSimilarMovies, getMovieDetails } = require("../controllers/movie.controller")

const Movie_router = express.Router();

Movie_router.get("/trending", getTrendingMovie);
Movie_router.get("/:id/trailers", getMovieTrailers);
Movie_router.get("/:id/details", getMovieDetails);
Movie_router.get("/:id/similar", getSimilarMovies);
Movie_router.get("/:category", getMoviesByCategory);

module.exports = Movie_router