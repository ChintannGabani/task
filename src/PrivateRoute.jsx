// frontend/src/PrivateRoute.jsx
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './context/AuthContext';

// Protected route component
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return user ? children ? children : <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;