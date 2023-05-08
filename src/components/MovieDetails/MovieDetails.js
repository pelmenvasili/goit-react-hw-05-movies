import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const API_KEY = '85aded699850148534e98bbdd6991e7d';
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from || '/');

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => setDetails(data))
      .catch(error => console.log(error));
  }, [movieId, URL]);

  if (!details.title && !details.name && !details.overview && !details.genres) {
    return (
      <>
        <Link to={backLinkLocationRef.current} className={css.backLink}>
          Go back
        </Link>
        <div className={css.noInfo}>Data not available</div>
      </>
    );
  }

  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.backLink}>
        Go back
      </Link>
      <ul className={css.movieDetailsList}>
        <li key={details.id} className={css.movieDetailsItem}>
          <img
            src={
              `https://image.tmdb.org/t/p/w500${details.backdrop_path}` ||
              `https://image.tmdb.org/t/p/w500${details.poster_path}`
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
            <p className={css.detailsValue}>{details.title || details.name}</p>
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
            </p>{' '}
            <p className={css.detailsValue}>{details.overview}</p>
            <p className={css.detailsHeading}>
              <b>Genres:</b>{' '}
            </p>
            <p className={css.detailsValue}>
              {details.genres &&
                details.genres
                  .map(genre => genre.name.toLowerCase())
                  .join(', ')}
            </p>
          </div>{' '}
        </li>
      </ul>
      <Link to={`cast`} className={css.castLink}>
        Cast
      </Link>
      <Link to={`reviews`} className={css.reviewsLink}>
        Reviews
      </Link>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
