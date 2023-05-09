import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/services';
import MoviesList from 'components/MovieList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      setLoading(true);
      const getMovies = async () => {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      };
      getMovies();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>Data no avialable</h2>}
      <h1 className={css.homeTitle}>Trending movies</h1>
      {trendingMovies.length > 0 && (
        <div className={css.homeContainer}>
          <MoviesList movies={trendingMovies} state={{ from: location }} />
        </div>
      )}
    </>
  );
};

export default Home;
