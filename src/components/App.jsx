import { Route, Routes } from 'react-router-dom';
import UsersList from './UsersList/UsersList';
import HomePage from './Home/HomePage';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<UsersList />} />
      </Routes>
    </div>
  );
};
