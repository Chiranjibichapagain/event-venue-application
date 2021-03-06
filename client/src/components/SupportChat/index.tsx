import React from 'react';
import { SupportChatProps } from '../../types';

import './SupportChat.scss';
const SupportChat = ({ message, id }: SupportChatProps) => {
  const getTime = (time) => {
    return time.slice(15, 21);
  };

  if (message.type === 'organize') {
    return (
      <div id={id} className="chat-o">
        <span className="chat-o__span">{`${message.name} - ${getTime(message.time)} `}</span>
        <p className="chat-o__text">{message.message}</p>
      </div>
    );
  } else {
    return (
      <div id={id} className="chat-g">
        <span className="chat-g__span">{`${message.name} - ${getTime(message.time)} `}</span>
        <p className="chat-g__text">{message.message}</p>
      </div>
    );
  }
};

export default SupportChat;
