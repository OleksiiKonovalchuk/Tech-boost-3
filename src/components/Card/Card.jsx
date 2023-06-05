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
    <div key={id} className={css.card}>
      <img src={bg} alt="bg" className={css.img} />
      <img src={logo} alt="logo" className={css.logo} />
      <div className={css.avatarWrapper}>
        <img src={avatar} alt="avatar" className={css.avatar} />
        <p className={css.userName}>{creator}</p>
      </div>
      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{followers} followers</p>
      <button
        type="button"
        className={sub ? `${css.button} ${css.active}` : css.button}
        onClick={clickHandler}
      >
        {sub ? 'following' : 'follow'}
      </button>
    </div>
  );
};

export default Card;
