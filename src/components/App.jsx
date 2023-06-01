import UsersList from './UsersList/UsersList';

export const App = () => {
  return (
    <div
      style={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UsersList />
    </div>
  );
};
