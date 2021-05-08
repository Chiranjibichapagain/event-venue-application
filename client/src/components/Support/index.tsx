import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';

import Input from '../../components/Input';
import Button from '../Button';
import SupportChat from '../SupportChat';
import { useForm } from '../../Hooks/useForm';

import './Support.scss';
import { Chat, Room } from '../../types';

const Support = () => {
  const socket = io('http://localhost:5000');
  const [logged, setLogged] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [chatList, setChatList] = useState<any[]>([]);
  const [fields, setFields, reset] = useForm({
    message: '',
    email: '',
    name: userName ? userName : ''
  });

  useEffect(() => {
    const LS = localStorage.getItem('venue-guest');
    if (LS) {
      const { roomId, name } = JSON.parse(LS);
      setLogged(true);
      setRoomId(roomId);
      setUserName(name);
      fetchChat();
    }
  }, []);

  const { message, email, name } = fields;

  const fetchChat = () => {
    const LS = localStorage.getItem('venue-guest');
    if (LS) {
      const { roomId } = JSON.parse(LS);
      socket.emit('fetch-chat', roomId);
      socket.on('fetched-chat', (chatList: Chat[]) => {
        setChatList([...chatList]);
      });
      socket.on('room-not-found', () => {
        setLogged(false);
      });
    }
  };

  const startChat = (e: any) => {
    e.preventDefault();
    if (name && email) {
      const roomInfo = { name, email };
      socket.emit('create-room', roomInfo);
      socket.on('created-room', (room: Room) => {
        setRoomId(room.id);
        setLogged(true);
        localStorage.setItem('venue-guest', JSON.stringify({ roomId: room.id, name }));
      });
    }
  };

  const sendMessage = () => {
    if (message && name && roomId) {
      const newMessage = { message, name, type: 'guest', roomId };
      socket.emit('new-message', newMessage);
      socket.on('returned-message', (newMessage: any) => {
        setChatList([...chatList, newMessage]);
      });
      reset();
    }
  };

  return (
    <div className="support">
      {logged ? (
        <div className="support__chat-box">
          <div className="support__messages">
            {chatList.length > 0 ? (
              chatList.map((message) => <SupportChat message={message} />)
            ) : (
              <p style={{ color: 'white' }}>Send a message and start chatting!</p>
            )}
          </div>
          <form className="support__form">
            <Input
              required={true}
              placeholder="write a message"
              type="text"
              id="message"
              value={message}
              handleInputChange={setFields}
            />
            <IoMdSend onClick={sendMessage} className="support__send" />
          </form>
        </div>
      ) : (
        <div className="support__register">
          <h2 className="support__heading">Hi there! Welcome to our customer support chat. </h2>
          <p className="support__text">Please enter your name and ask questions!</p>
          <div className="support__set-user-div">
            <Input
              required={true}
              placeholder="Your email"
              type="text"
              id="email"
              value={email}
              handleInputChange={setFields}
            />
            <Input
              required={true}
              placeholder="Your FirstName"
              type="text"
              id="name"
              value={name}
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
