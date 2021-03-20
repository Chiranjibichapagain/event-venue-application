import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import VenuePage from './pages/VenuePage';
import ProtectedRoute from './utils/ProtectedRoute';

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={HomePage} />
    <Route exact path="/welcomepage" component={LandingPage} />
    <Route exact path="/venue/:venueId" component={VenuePage} />
    {/* path '/' without exact will take anything that doesn't match to other routes to this route */}
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default Routes;