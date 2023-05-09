import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'services/services';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import MoviesList from 'components/MovieList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchingMovies = async () => {
      try {
        setLoading(true);
        const searchedMovies = await fetchSearchMovies(query);
        setMovies(searchedMovies);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchingMovies();
  }, [query]);

  const handleChangeInput = e => {
    setSearchValue(e.target.value.trim());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (searchValue !== '') {
      setSearchParams({ query: searchValue });
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Search movies..."
          value={searchValue}
          onChange={handleChangeInput}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      {error && <h2>Data not available</h2>}
      {movies.length > 0 && (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
      {movies.length === 0 && query !== '' && (
        <p>No movies found with the title "{query}"</p>
      )}
    </div>
  );
};
export default Movies;
