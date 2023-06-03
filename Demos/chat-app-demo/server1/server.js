// npm install express mongoose socket.io multer
const express = require('express');
const mongoose = require('mongoose');
const socket = require('socket.io');
const multer = require('multer');
const path = require('path');

// Set up express app
const app = express();
app.use(express.json());

// Set up database connection using mongoose
mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Define chat message schema
const messageSchema = new mongoose.Schema({
  text: String,
  image: String,
  user: String,
  createdAt: { type: Date, default: Date.now }
});

// Create message model
const Message = mongoose.model('Message', messageSchema);

// Set up multer for handling image uploads
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.post('/api/messages', upload.single('image'), async (req, res) => {
  const { text, user } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    const message = new Message({ text, image, user });
    await message.save();
    
    // Emit the new message to all connected clients
    io.emit('message', message);
    
    res.status(201).json(message);
  } catch (err) {
    console.error('Error saving message', err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Set up socket.io
const server = app.listen(5000, () => {
  console.log('Server running on port 5000');
});

const io = socket(server);
io.on('connection', socket => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
