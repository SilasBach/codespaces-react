// PrivateRoute.js
import { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute({ path, children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:3000/credentials');
        const [storedUsername, storedPassword] = response.data.split(':');

        // Here you should replace 'username' and 'password' with the actual values you want to check
        setIsAuthenticated('username' === storedUsername && 'password' === storedPassword);
      } catch (error) {
        console.error('Error fetching credentials:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Route 
      path={path} 
      element={isAuthenticated === null ? null : isAuthenticated ? children : <Navigate to="/login" replace />} 
    />
  );
}

export default PrivateRoute;