import React, { useState } from 'react';
import { BiSupport } from 'react-icons/bi';

import './App.scss';
import Footer from './components/Footer';

import Nav from './components/Nav';
import Support from './components/Support';
import Routes from './Routes';

function App() {
  const [log, setLog] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="app">
      <Nav log={log} />
      <Routes setLog={setLog} />
      <Footer />
      <div className={isChatOpen ? 'chat-box' : 'chat-box chat-box--hidden'}>
        <Support />
      </div>
      <div onClick={() => setIsChatOpen(!isChatOpen)} className="chat-bot">
        <BiSupport className="chat-bot__icon" />
      </div>
    </div>
  );
}

export default App;
