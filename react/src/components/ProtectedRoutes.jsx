import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function ProtectedRoutes({ role }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userrole, setUserRole] = useState('user');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  console.log(role);

  if (!role.includes(userrole)) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ProtectedRoutes;
