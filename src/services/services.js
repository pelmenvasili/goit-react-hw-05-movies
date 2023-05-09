import axios from 'axios';
const KEY = '85aded699850148534e98bbdd6991e7d';

export const fetchTrendingMovies = async () => {
  const URL = 'https://api.themoviedb.org/3/trending/all/day';
  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const TrendingMovies = await axios.get(`${URL}?${options}`);
    return TrendingMovies.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const options = new URLSearchParams({
    api_key: KEY,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async search => {
  const URL = `https://api.themoviedb.org/3/search/movie`;
  const options = new URLSearchParams({
    api_key: KEY,
    query: search,
  });

  try {
    const movie = await axios.get(`${URL}?${options}`);
    return movie.data.results;
  } catch (error) {
    console.log(error);
  }
};
