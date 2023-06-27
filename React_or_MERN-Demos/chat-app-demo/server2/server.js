// npm install express mongoose socket.io
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for messages
const messageSchema = new mongoose.Schema({
  content: String,
  sender: String,
  group: String,
  timestamp: { type: Date, default: Date.now },
});

// Create a model for messages
const Message = mongoose.model('Message', messageSchema);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  // Join a group chat
  socket.on('join', (group) => {
    socket.join(group);
  });

  // Receive and broadcast messages
  socket.on('message', (data) => {
    const { content, sender, group } = data;

    // Save the message to the database
    const message = new Message({ content, sender, group });
    message.save();

    // Broadcast the message to the group
    socket.to(group).emit('message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
