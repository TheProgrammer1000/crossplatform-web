import styles from './GetAllUsers.module.css';
import { useGetUsersQuery } from '../../store/api/usersApi';
import { useEffect, useState } from 'react';
import { User } from '../User';

export const GetAllUsers = () => {
  const { data, refetch } = useGetUsersQuery({});

  // Function to manually trigger a refetch
  const handleRefetch = () => {
    refetch();
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className={styles.ulList}>
        {data.map((user) => {
          return <User key={user.id} props={user} />;
        })}
      </ul>

      <button className="TabButton" onClick={handleRefetch}>
        Refetch Users
      </button>
    </>
  );
};
