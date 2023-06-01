import React, { useEffect, useCallback, useState } from 'react';
import css from './UsersList.module.scss';
import { getAllUsers } from 'API/API';
import Card from 'components/Card/Card';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const updateUsers = useCallback(async () => {
    const data = await getAllUsers();
    return setUsers(data);
  }, [setUsers]);

  useEffect(() => {
    updateUsers();
  }, [updateUsers]);

  const items = users.length
    ? users.map(item => {
        return (
          <Card
            key={item.id}
            id={item.id}
            tweets={item.tweets}
            followers={item.followers}
            avatar={item.avatar}
          />
        );
      })
    : 'NO users to show!';
  return <ul className={css.users}>{items}</ul>;
};

export default UsersList;
