import css from './HomePage.module.scss';

function HomePage() {
  return (
    <main className={css.home}>
      <section className={css.hero}>
        <h1 className={css.header}>Welcome to Our Page!</h1>
        <p className={css.text}>
          Make a coffee, take a sit, and enjoy your favorite user-tweets!
        </p>
      </section>
    </main>
  );
}

export default HomePage;
