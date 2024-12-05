const express = require('express');
const {
    getSearchHistory,
    removeItemFromSearchHistory,
    searchMovie,
    searchPerson,
    searchTv,
} = require("../controllers/search.controller.js");

const Search_router = express.Router();

Search_router.get("/person/:query", searchPerson);
Search_router.get("/movie/:query", searchMovie);
Search_router.get("/tv/:query", searchTv);

Search_router.get("/history", getSearchHistory);

Search_router.delete("/history/:id", removeItemFromSearchHistory);

module.exports = Search_router