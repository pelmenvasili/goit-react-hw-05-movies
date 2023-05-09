import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import { fetchMovieById } from 'services/services';
import noImage from '../../components/Cast/noimage.png';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from || '/');
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovieDetails = async () => {
      try {
        const movieInfo = await fetchMovieById(movieId);
        if (movieInfo) {
          setDetails(movieInfo.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.backLink}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {!isLoading && error && <p>There is no information about movie.</p>}
      {details && (
        <ul className={css.movieDetailsList}>
          <li key={details.id} className={css.movieDetailsItem}>
            <img
              src={
                details.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${details.backdrop_path}`
                  : details.poster_path
                  ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                  : noImage
              }
              alt="movie poster"
              className={css.moviePoster}
              width="450"
              height="300"
            />
            <div className={css.infoContainer}>
              <p className={css.detailsHeading}>
                <b>Title:</b>
              </p>
              <p className={css.detailsValue}>
                {details.title || details.original_title || details.name}
              </p>
              {details.release_date ? (
                <p>({details.release_date.substring(0, 4)})</p>
              ) : (
                <p>Date not specified</p>
              )}
              <p className={css.detailsHeading}>
                <b>User score:</b>
              </p>
              <p className={css.detailsValue}>
                {details.vote_average && !isNaN(details.vote_average)
                  ? Math.round(details.vote_average)
                  : '-'}
              </p>
              <p className={css.detailsHeading}>
                <b>Description:</b>
              </p>
              <p className={css.detailsValue}>{details.overview}</p>
              <p className={css.detailsHeading}>
                <b>Genres:</b>
              </p>
              <p className={css.detailsValue}>
                {details.genres &&
                  details.genres
                    .map(genre => genre.name.toLowerCase())
                    .join(', ')}
              </p>
            </div>
          </li>
        </ul>
      )}
      <Link to={`cast`} className={css.castLink}>
        Cast
      </Link>
      <Link to={`reviews`} className={css.reviewsLink}>
        Reviews
      </Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
