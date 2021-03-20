import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.css';

const WithProvider = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <WithProvider />
  </React.StrictMode>,
  document.getElementById('root')
);
