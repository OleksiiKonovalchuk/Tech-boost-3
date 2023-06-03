import React, { useEffect, useCallback, useState } from 'react';
import css from './UsersList.module.scss';
import { getAllUsers } from 'API/API';
import Card from 'components/Card/Card';
import { useNavigate, useSearchParams } from 'react-router-dom';

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem(`subs`)) || []
  );
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  console.log(searchParams.page);
  const storageHandler = useCallback(
    ({ creator, sub }) => {
      if (!following.length) {
        setFollowing([creator]);
      } else {
        setFollowing(prev => {
          if (!sub) {
            return [...prev, creator];
          } else return [...prev.filter(item => item !== creator)];
        });
      }
    },
    [following]
  );
  const updateUsers = useCallback(async () => {
    const data = await getAllUsers(page);
    if (page === 1) return setUsers(data);
    else return setUsers(prev => [...prev, data]);
  }, [setUsers, page]);

  useEffect(() => {
    localStorage.setItem(`subs`, JSON.stringify(following));
  }, [following, storageHandler]);
  useEffect(() => {
    setSearchParams({ page });
    updateUsers(page);
  }, [updateUsers, searchParams, page, setSearchParams]);

  const items = users.length
    ? users.map(item => {
        return (
          <Card key={item.id} user={item} storageHandler={storageHandler} />
        );
      })
    : 'NO users to show!';
  return (
    <main>
      <button
        onClick={() => {
          navigation('/');
        }}
      >
        Back to Main Page
      </button>
      <ul className={css.users}>{items}</ul>
      <button
        type="button"
        className={css.loadMore}
        onClick={() => {
          setPage(prev => prev + 1);
        }}
      >
        Load More
      </button>
    </main>
  );
};

export default UsersList;
