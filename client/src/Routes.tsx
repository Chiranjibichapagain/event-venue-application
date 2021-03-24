import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import VenuePage from './pages/VenuePage';
import BookingPage from './pages/BookingPage';
import ProtectedRoute from './utils/ProtectedRoute';
import PaymentPage from './pages/PaymentPage';

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={HomePage} />
    <Route exact path="/welcomepage" component={LandingPage} />
    <ProtectedRoute exact path="/venue/:venueId" component={VenuePage} />
    <ProtectedRoute exact path="/venue/:venueData/booking" component={BookingPage} />
    <ProtectedRoute exact path="/venue/:data/payment" component={PaymentPage} />
    <ProtectedRoute exact path="/admin" component={AdminPage} />
    {/* path '/' without exact will take anything that doesn't match to other routes to this route */}
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default Routes;
