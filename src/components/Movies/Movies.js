import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [searchValue, setSearchValue] = useState('');

  const API_KEY = '85aded699850148534e98bbdd6991e7d';
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;

  const location = useLocation();

  useEffect(() => {
    if (query.trim() !== '') {
      fetch(URL)
        .then(r => r.json())
        .then(data => setMovies(prevMovies => [...prevMovies, ...data.results]))
        .catch(error => console.log(error))
    }
  }, [URL, query, setMovies]);

  const findMovie = () => {
    setPage(1);
    setMovies([]);
    setSearchParams({ query: searchValue });
  };

  const handleChangeInput = e => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      findMovie();
    }
  };

  return (
    <>
      <div className={css.container}>
        <input
          placeholder="Search movies..."
          value={searchValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          className={css.searchInput}
        />
        <button onClick={findMovie} className={css.searchBtn}>
          Search
        </button>
      </div>

      {movies.length === 0 && query.trim() !== '' ? (
        <p>No movies found with the title "{query}"</p>
      ) : (
        <ul className={css.movieList}>
          {movies.map(movie => (
            <li key={movie.id} className={css.movieItem}>
                <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            key={`${movie.id}`}
            className={css.movieItem}
          >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie poster"
                  className={css.moviePoster}
                  width="250"
                  height="350"
                />
                <p className={css.movieTitle}>{movie.title || movie.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
