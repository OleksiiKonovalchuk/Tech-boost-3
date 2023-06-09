import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
const UsersPage = lazy(() => import('./UsersPage/UsersPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/tweets" element={<UsersPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
