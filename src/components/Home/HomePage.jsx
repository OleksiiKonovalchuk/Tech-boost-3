import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      HomePage
      <Link to="/tweets">Tweets</Link>
    </div>
  );
}

export default HomePage;
