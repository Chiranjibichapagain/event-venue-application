const app = require('./app');
const http = require('http');
import { Server, Socket } from 'socket.io';
const config = require('./utils/config');
const Chat = require('./modals/Chat');
const Chatroom = require('./modals/Chatroom');

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket: Socket) => {
  socket.on('create-room', async (roomInfo: any) => {
    const { name, email } = roomInfo;
    const newRoom = new Chatroom({ name, email, chat: [] });
    const room = await newRoom.save();
    if (room) {
      io.emit('created-room', room);
    }
  });

  socket.on('new-message', async (newMessage: any) => {
    const { message, name, type, roomId } = newMessage;
    const chat = { message, name, type, time: new Date(), room: roomId };
    const newChat = new Chat(chat);
    const savedChat = await newChat.save();
    const foundRoom = await Chatroom.find({ _id: roomId });
    if (foundRoom) {
      await Chatroom.findOneAndUpdate(
        { _id: roomId },
        { $push: { chat: savedChat.id } },
        { upsert: true }
      )
        .then((result: any) => {
          io.emit('returned-message', savedChat);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  });

  socket.on('fetch-rooms', async () => {
    const rooms = await Chatroom.find({}).populate('chat');
    io.emit('all-chatrooms', rooms);
  });

  socket.on('fetch-chat', async (id: string) => {
    try {
      const room = await Chatroom.findOne({ _id: id }).populate('chat');

      if (room) {
        io.emit('fetched-chat', room.chat);
      } else {
        io.emit('room-not-found');
      }
    } catch (error) {
      io.emit('room-not-found');
    }
  });

  socket.on('delete-room', async (id: string) => {
    try {
      await Chatroom.findOneAndDelete({ _id: id }, async (err: any) => {
        if (!err) {
          const rooms = await Chatroom.find({}).populate('chat');
          io.emit('all-chatrooms', rooms);
          await Chat.deleteMany({ room: id });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('USER DISCONNECTED!!');
  });
});

server.listen(process.env.PORT || config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
