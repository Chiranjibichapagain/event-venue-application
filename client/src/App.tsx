import React from 'react';

import './App.scss';
import Footer from './components/Footer';

import Nav from './components/Nav';
import Routes from './Routes';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
