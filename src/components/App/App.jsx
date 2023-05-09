import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { lazy } from 'react';

const Cast = lazy(() => import('../Cast/Cast'));
const Home = lazy(() => import('../../Pages/Home/Home'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Movies = lazy(() => import('../../Pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../Pages/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
