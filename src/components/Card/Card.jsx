import React, { useState } from 'react';
import css from './Card.module.scss';
import bg from '../../img/bg.png';
import logo from '../../img/Logo.png';
import { updateFollowers } from 'API/API';

const Card = ({ id, tweets, followers, avatar }) => {
  const [btnActive, setBtnActive] = useState(false);
  const clickHandler = () => {
    setBtnActive(prev => !prev);
    updateFollowers(id);
  };
  return (
    <div key={id} className={css.card}>
      <img src={bg} alt="bg" className={css.img} />
      <img src={logo} alt="logo" className={css.logo} />
      <div className={css.avatarWrapper}>
        <img src={avatar} alt="avatar" className={css.avatar} />
      </div>
      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{followers} followers</p>
      <button
        type="button"
        className={btnActive ? `${css.button} ${css.active}` : css.button}
        onClick={clickHandler}
      >
        {btnActive ? 'following' : 'follow'}
      </button>
    </div>
  );
};

export default Card;
