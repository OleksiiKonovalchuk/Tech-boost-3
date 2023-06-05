import { Link } from 'react-router-dom';
import css from './Header.module.scss';

const Header = () => {
  return (
    <header className={css.header}>
      <Link className={css.link} to="/">
        Back to main Page
      </Link>
    </header>
  );
};

export default Header;
