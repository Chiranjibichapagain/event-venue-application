import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem('venue-app');
    userData ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [location.pathname]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/admin/login' }} />
      }
    />
  );
}

export default ProtectedRoute;
