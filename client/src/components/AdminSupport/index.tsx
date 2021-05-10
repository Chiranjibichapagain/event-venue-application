import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';

import Input from '../Input';
import { useForm } from '../../Hooks/useForm';
import supportGif from '../../Assets/illustration/helper.gif';
import { Chat, Room } from '../../types';
import SupportChat from '../SupportChat';

import './AdminSupport.scss';
import Loading from '../Loading';

const AdminSupport = ({ setNotification }) => {
  const socket = io('http://localhost:5000');
  const [data, setData] = useState<Chat[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [active, setActive] = useState<string>('');
  const [fields, setFields, reset] = useForm({
    message: ''
  });
  const { message } = fields;

  const sendMessage = () => {
    const activeRoom = rooms && rooms.find((room: Room) => room.id === active);
    if (activeRoom) {
      if (message) {
        const newMessage = { message, name: 'Organize', type: 'organize', roomId: activeRoom.id };
        socket.emit('new-message', newMessage);
        socket.on('returned-message', (newMessage: Chat) => {
          setData([...data, newMessage]);
          const el = document.getElementById(newMessage.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        });
        reset();
      }
    }
  };
  const fetchChatrooms = () => {
    socket.emit('fetch-rooms');
    socket.on('all-chatrooms', (data: Room[]) => {
      setRooms(data);
    });
  };

  socket.on('created-room', (room) => {
    setRooms([...rooms, room]);
    setNotification('New Chat');
  });

  useEffect(() => {
    fetchChatrooms();
  }, []);

  useEffect(() => {
    const activeRoom = rooms.find((room: Room) => room.id === active);
    if (activeRoom) {
      setData(activeRoom.chat);
    }
  }, [active]);

  const deleteRoom = (id: string) => {
    socket.emit('delete-room', id);
  };

  return rooms.length > 0 ? (
    <div className="a-support">
      <div className="a-support__rooms">
        {rooms.map((room: Room) => (
          <div
            className={
              active === room.id ? 'a-support__room' : 'a-support__room a-support__room--inactive'
            }
            onClick={() => setActive(room.id)}
          >
            <p className="a-support__room-text">{room.name}</p>
            <FaTrashAlt onClick={() => deleteRoom(room.id)} className="a-support__room-icon" />
          </div>
        ))}
      </div>
      <div className="a-support__chat">
        <div className="a-support__conversation">
          {data.length > 0 ? (
            data.map((chat: Chat) => <SupportChat id={chat.id} message={chat} />)
          ) : (
            <div className="a-support__fallback">
              <p className="a-support__fallback-text">
                Select a chat room and talk to your clients
              </p>
              <img className="a-support__fallback-image" src={supportGif} alt="support" />
            </div>
          )}
        </div>
        <div className="a-support__form">
          <div className="a-support__input-div">
            <Input
              placeholder="write a message"
              type="text"
              id="message"
              value={message}
              handleInputChange={setFields}
            />
          </div>
          <IoMdSend onClick={sendMessage} className="a-support__send" />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default AdminSupport;
