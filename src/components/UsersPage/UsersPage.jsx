import React, { useEffect, useState } from 'react';
import css from './UsersPage.module.scss';
import { getAllUsers, getUsersFromPage } from 'API/API';
import Card from 'components/Card/Card';
import Dropdown from './Dropdown/Dropdown';
import Header from 'components/Header/Header';

const UsersPage = () => {
  const [filter, setFilter] = useState('show all');
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem(`subs`)) || []
  );
  const storageHandler = ({ creator, sub }) => {
    if (!following.length) {
      setFollowing([creator]);
    } else {
      setFollowing(prev => {
        if (!sub) {
          return [...prev, creator];
        } else return [...prev.filter(item => item !== creator)];
      });
    }
  };
  const getUsers = async () => {
    const data = await getAllUsers();
    return setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    localStorage.setItem(`subs`, JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    if (page === 1) return;
    const updateUsers = async () => {
      const data = await getUsersFromPage(page);
      return setUsers(prev => [...prev, ...data]);
    };
    updateUsers();
  }, [page]);

  const filterUsers = item => {
    switch (filter) {
      case 'follow':
        return !following.includes(item.user);
      case 'followings':
        return following.includes(item.user);
      default:
        return item;
    }
  };

  const items = users.length ? (
    users.filter(filterUsers).map(item => {
      return <Card key={item.id} user={item} storageHandler={storageHandler} />;
    })
  ) : (
    <p className={css.noUsers}>There are no Users to show!</p>
  );
  return (
    <>
      <main className={css.mainBG}>
        <section className={css.usersSection}>
          <div className="container">
            <h1 className="visually-hidden">Users List Section </h1>
            <div className={css.wrap}>
              <Dropdown onChange={setFilter} /> <Header />
            </div>
            <ul className={css.users}>{items}</ul>
            {items.length !== 16 && (
              <button
                type="button"
                className={css.loadMore}
                onClick={() => {
                  setPage(prev => prev + 1);
                }}
              >
                <p className={css.btnText}>Load More</p>
              </button>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default UsersPage;
