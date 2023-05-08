import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const API_KEY = '85aded699850148534e98bbdd6991e7d';
  const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, [URL]);

  return (
    <>
      <h1 className={css.homeTitle}>Trending movies</h1>
      <div className={css.homeContainer}>
        <ul className={css.homeList}>
          {movies.map(movie => (
            <Link
              to={`movies/${movie.id}`}
              key={movie.id}
              className={css.homeItem}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
                className={css.moviePoster}
                width="250"
                height="350"
              />
              <p className={css.movieTitle}>
                {movie.title} {movie.name}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
