import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h3>Welcome, {username}!</h3>
      <p>Login is successful.</p>
    </div>
  );
};

export default AdminDashboard;
