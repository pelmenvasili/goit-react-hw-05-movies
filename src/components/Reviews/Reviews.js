import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const { movieId } = useParams();
  const API_KEY = '85aded699850148534e98bbdd6991e7d';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => {
        setReviews(data.results);
        setPage(page => page + 1);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.length === 0 ? (
          <p>There are no reviews for now</p>
        ) : (
          reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>{review.author}</h3>
              <p className={css.reviewContent}>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
