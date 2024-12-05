const axios = require('axios');
require('dotenv').config();

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

if (!MOVIE_API_KEY) {
  console.warn("Warning: MOVIE_API_KEY is not defined in the .env file.");
}

const fetchFromTMDB = async (url) => {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${MOVIE_API_KEY}`,
      },
    };

    const response = await axios.get(url, options);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch data from TMDB. Status: ${response.status} - ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data from TMDB: ${error.response?.status} - ${error.response?.statusText || error.message}`
    );
    throw error;
  }
};

module.exports = fetchFromTMDB;
