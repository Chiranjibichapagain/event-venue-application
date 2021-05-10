import React, { useState, useEffect, ChangeEvent } from 'react';
import io from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';

import Input from '../../components/Input';
import Button from '../Button';
import SupportChat from '../SupportChat';
import { useForm } from '../../Hooks/useForm';
import { Chat, Room } from '../../types';

import './Support.scss';

const Support = () => {
  const socket = io('http://localhost:5000');
  const [logged, setLogged] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [fields, setFields, reset] = useForm({
    message: '',
    email: '',
    name: ''
  });

  useEffect(() => {
    const LS = localStorage.getItem('venue-guest');
    if (LS) {
      setLogged(true);
      const { roomId, name } = JSON.parse(LS);
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
    }
  };

  socket.on('room-not-found', () => {
    setLogged(false);
  });

  const startChat = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (name && email) {
      const roomInfo = { name, email };
      socket.emit('create-room', roomInfo);
      socket.on('created-room', (room: Room) => {
        setRoomId(room.id);
        setLogged(true);
        setUserName(name);
        localStorage.setItem('venue-guest', JSON.stringify({ roomId: room.id, name }));
      });
    }
  };

  const sendMessage = () => {
    if (message && userName && roomId) {
      const newMessage = { message, name: userName ? userName : name, type: 'guest', roomId };
      socket.emit('new-message', newMessage);
      socket.on('returned-message', (newMessage: Chat) => {
        setChatList([...chatList, newMessage]);
        const el = document.getElementById(newMessage.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
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
              chatList.map((message) => <SupportChat id={message.id} message={message} />)
            ) : (
              <p style={{ color: 'white' }}>Send a message and start chatting!</p>
            )}
          </div>
          <form className="support__form">
            <div className="support__input-div">
              <Input
                required={true}
                placeholder="write a message"
                type="text"
                id="message"
                value={message}
                handleInputChange={setFields}
              />
            </div>
            <IoMdSend onClick={sendMessage} className="support__send" />
          </form>
        </div>
      ) : (
        <div className="support__register">
          <h2 className="support__heading">Hi! Welcome to our customer support chat. </h2>
          <p className="support__text">Please enter your details and ask questions!</p>
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
