import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={css.header}>
      {pathname === '/' ? (
        <Link className={css.link} to="/tweets">
          Read some Tweets
        </Link>
      ) : (
        <Link className={css.link} to="/">
          Back to main Page
        </Link>
      )}
      {/* {path === '/tweets' && <Link to="/">Back to main Page</Link>} */}
    </header>
  );
};

export default Header;
