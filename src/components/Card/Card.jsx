import React, { useState } from 'react';
import css from './Card.module.scss';
import bg from '../../img/bg.png';
import logo from '../../img/Logo.png';
import { updateFollowers } from 'API/API';

const Card = ({ user, storageHandler }) => {
  const { id, tweets, followers: subscribers, avatar, user: creator } = user;

  const [sub, setSub] = useState(() => {
    const subs = localStorage.getItem('subs');
    if (subs) {
      return subs.includes(creator);
    }
    return false;
  });
  const [followers, setFollowers] = useState(subscribers);

  const commaAdder = number => {
    if (number.toString().length <= 3) return number;
    if (number.toString().length <= 6) {
      const str = number.toString().split('');
      str.splice(-3, 0, ',');
      return str.join('');
    }
    const str = number.toString().split('');
    str.splice(-3, 0, ',');
    str.splice(-7, 0, ',');
    return str.join('');
  };

  const clickHandler = () => {
    setSub(prev => !prev);
    storageHandler({ creator, sub });

    setFollowers(prev => {
      if (sub) {
        return prev - 1;
      } else {
        return prev + 1;
      }
    });
    updateFollowers({ id, subscribers, sub });
  };
  return (
    <li key={id} className={css.card}>
      <img src={bg} alt="bg" className={css.img} />
      <img src={logo} alt="logo" className={css.logo} />
      <div className={css.avatarWrapper}>
        <img src={avatar} alt="avatar" className={css.avatar} />
        <p className={css.userName}>{creator}</p>
      </div>
      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{commaAdder(followers)} followers</p>
      <button
        type="button"
        className={sub ? `${css.button} ${css.active}` : css.button}
        onClick={clickHandler}
      >
        {sub ? 'following' : 'follow'}
      </button>
    </li>
  );
};

export default Card;
