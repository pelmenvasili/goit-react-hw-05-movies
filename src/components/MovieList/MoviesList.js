import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';
import noImage from '../Cast/noimage.png';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, state }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: state.from }}
            className={css.movieLink}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : noImage
              }
              alt={`${movie.title} poster`}
              className={css.moviePoster}
              width="250"
              height="350"
            />
            <p className={css.movieTitle}>
              {movie.title || movie.title_original || movie.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      title_original: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ),
  state: PropTypes.shape({
    from: PropTypes.object.isRequired,
  }).isRequired,
};

export default MoviesList;
