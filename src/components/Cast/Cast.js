import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import noImage from './noimage.png';

const Cast = () => {
  const { movieId } = useParams();
  const API_KEY = '85aded699850148534e98bbdd6991e7d';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [URL]);

  return (
    <>
      <h2 className={css.castHeading}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.castItem}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                className={css.castImage}
                alt={actor.name}
                width="150"
                height="225"
              />
            ) : (
              <img
                src={noImage}
                alt="placeholder"
                width="200"
                height="225"
                className={css.castImage}
              ></img>
            )}
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
