//npx create-react-app chat-app
// cd chat-app
// npm install socket.io-client axios
//npm start

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState('general');

  useEffect(() => {
    // Fetch initial messages
    axios.get('/api/messages').then((response) => {
      setMessages(response.data);
    });

    // Listen for new messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = () => {
    const newMessage = {
      content: inputMessage,
      sender: username,
      group: group,
    };

    // Send the message to the server
    socket.emit('message', newMessage);

    // Clear the input field
    setInputMessage('');
  };

  return (
    <div>
      <h1>Real-time Chat App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="general">General</option>
          <option value="random">Random</option>
          <option value="mern">MERN</option>
        </select>
      </div>
      <div>
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <strong>{message.sender}: </strong>
              {message.content}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
