const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const Chat = require('./modals/Chat');

const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket: any) => {
  socket.on('input chat message', async (message: any) => {
    const chat = new Chat({
      message: message.chatMessage,
      sender: message.name,
      time: message.time,
      type: message.type
    });
    const savedChat = await chat.save();
    console.log('test--', savedChat);
    return io.emit('output chat message', savedChat);
  });
});

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
