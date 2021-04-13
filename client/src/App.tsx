import React, { useState } from 'react';

import './App.scss';
import Footer from './components/Footer';

import Nav from './components/Nav';
import Routes from './Routes';

function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="app">
      <Nav log={log} />
      <Routes setLog={setLog} />
      <Footer />
    </div>
  );
}

export default App;
