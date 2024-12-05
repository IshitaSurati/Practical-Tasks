const express = require('express');
const {
    getSimilarTvs,
    getTrendingTv,
    getTvDetails,
    getTvsByCategory,
    getTvTrailers,
} =require("../controllers/tv.controller.js");

const TV_router = express.Router();

TV_router.get("/trending", getTrendingTv);
TV_router.get("/:id/trailers", getTvTrailers);
TV_router.get("/:id/details", getTvDetails);
TV_router.get("/:id/similar", getSimilarTvs);
TV_router.get("/:category", getTvsByCategory);

module.exports=TV_router