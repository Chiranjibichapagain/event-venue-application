import React from 'react';

import './SupportChat.scss';
const SupportChat = ({ message }) => {
  const getTime = (time) => {
    return time.slice(0, 5);
  };

  if (message.type === 'organize') {
    return (
      <div className="chat-o">
        <span className="chat-o__span">{getTime(message.time)}</span>
        <p className="chat-o__text">{message.message}</p>
      </div>
    );
  } else {
    return (
      <div className="chat-g">
        <span className="chat-g__span">{`${message.sender}  ${getTime(message.time)} `}</span>
        <p className="chat-g__text">{message.message}</p>
      </div>
    );
  }
};

export default SupportChat;
