import { Link } from 'react-router-dom';
import css from './HomePage.module.scss';
import { ReactComponent as Logo } from '../../img/goIT.svg';
function HomePage() {
  return (
    <main className={css.home}>
      <section className={css.hero}>
        <div className="container">
          <a
            href="https://goit.global/ua/"
            className={css.logoLink}
            target="_blank"
            rel="noreferrer"
          >
            <Logo className={css.logo} />
          </a>
          <h1 className={css.header}>Welcome to Our Page</h1>
          <p className={css.text}>
            Grab some coffee, take a sip, and dive into tweets from all over the
            world!
          </p>
          <Link to="/tweets" className={css.link}>
            Read some tweets
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
