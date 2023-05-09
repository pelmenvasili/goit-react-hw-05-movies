import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import noImage from './noimage.png';
import { fetchMovieCast } from 'services/services';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getMovieCast = async () => {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast.cast);
      };
      getMovieCast();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  if (cast.length === 0) {
    return <p>There are no cast for this movie.</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>There are no cast for this movie.</h2>}
      <h2 className={css.castHeading}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id || actor.cast_id} className={css.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : noImage
              }
              className={css.castImage}
              alt={actor.name}
              width="150"
              height="225"
            />
            <p>
              <b className={css.actorName}>Name:</b> {actor.name}
            </p>
            <p>
              <b className={css.characterName}>Character:</b> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
