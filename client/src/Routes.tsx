import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import VenuePage from './pages/VenuePage';
import BookingPage from './pages/BookingPage';
import ProtectedRoute from './utils/ProtectedRoute';
import PaymentPage from './pages/PaymentPage';
import AdminLoginPage from './pages/AdminLoginPage';
import VenueEditPage from './pages/VenueEditPage';

const Routes = ({ setLog }) => (
  <Switch>
    <Route exact path="/products" component={HomePage} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/venue/:venueId" component={VenuePage} />
    <Route exact path="/venue/:venueId/booking" component={BookingPage} />
    <Route exact path="/venue/:bookingInfo/payment" component={PaymentPage} />
    <ProtectedRoute exact path="/admin" component={AdminPage} />
    <Route exact path="/admin/login" render={() => <AdminLoginPage setLog={setLog} />} />
    <ProtectedRoute exact path="/admin/venueEdit/:id" component={VenueEditPage} />
    {/* path '/' without exact will take anything that doesn't match to other routes to this route */}
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default Routes;
