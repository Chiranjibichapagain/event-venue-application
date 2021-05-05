import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';

import Input from '../../components/Input';
import Button from '../Button';
import SupportChat from '../SupportChat';
import { useForm } from '../../Hooks/useForm';

import './Support.scss';

const dummyChat = [
  {
    time: '20:10:09 GMT+0300 (Eastern European Summer Time)',
    sender: 'Chiranjibi',
    message: 'Hello how are you?',
    type: 'organize'
  },
  {
    time: '20:12:09 GMT+0300 (Eastern European Summer Time)',
    sender: 'Gopal',
    message: 'I am fine Thanks. How are you?',
    type: 'guest'
  }
];

const Support = () => {
  const socket = io('http://localhost:5000');
  const [user, setUser] = useState('');
  const [returnMSG, setReturnMSG] = useState<any[]>([]);
  const [fields, setFields] = useForm({
    message: '',
    guest: ''
  });

  const { message, guest } = fields;

  useEffect(() => {
    socket.on('output chat message', (message: any) => {
      setReturnMSG([...returnMSG, message]);
    });
    const LS = localStorage.getItem('venue-app');
    const parsedLS = LS && JSON.parse(LS);
    const name = parsedLS.userInfo.name.split(' ');
    setUser(name[0]);
  }, []);

  const handleSubmit = () => {
    const chatData = {
      chatMessage: message,
      name: user ? user : guest,
      time: new Date().toTimeString(),
      type: user ? 'organize' : 'guest'
    };
    socket.emit('input chat message', chatData);
  };

  const startChat = () => {
    console.log('start');
  };

  return (
    <div className="support">
      {user ? (
        <div className="support__chat-box">
          <div className="support__messages">
            {dummyChat.map((message) => (
              <SupportChat message={message} />
            ))}
          </div>
          <div className="support__form">
            <Input
              placeholder="write a message"
              type="text"
              id="message"
              value={message}
              handleInputChange={setFields}
            />
            <IoMdSend onClick={handleSubmit} className="support__send" />
          </div>
        </div>
      ) : (
        <div className="support__register">
          <h2 className="support__heading">Hi there! Welcome to our customer support chat. </h2>
          <p className="support__text">Please enter your name and ask questions!</p>
          <div className="support__set-user-div">
            <Input
              placeholder="Your First Name"
              type="text"
              id="guest"
              value={guest}
              handleInputChange={setFields}
            />
            <Button text="start" modifier="small" handleClick={startChat} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
