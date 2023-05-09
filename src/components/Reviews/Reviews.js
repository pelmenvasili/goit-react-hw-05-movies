import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { fetchMovieReviews } from '../../services/services';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getMovieReviews = async () => {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews.results);
      };

      getMovieReviews();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>There are no reviews for now</p>;
  }

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      {isLoading && <Loader />}
      {error && <h2>Data no avialable</h2>}
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={css.reviewItem}>
            <h3 className={css.reviewAuthor}>{review.author}</h3>
            <p className={css.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
