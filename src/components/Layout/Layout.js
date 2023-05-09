import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header>
        <ul className={css.layoutList}>
          <li className={css.layoutItem}>
            <NavLink to="/" className={css.homeLink}>
              Home
            </NavLink>
          </li>
          <li className={css.layoutItem}>
            <NavLink to="movies" className={css.moviesLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
