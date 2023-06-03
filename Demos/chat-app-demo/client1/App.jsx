// npx create-react-app chat-app
// cd chat-app
// npm install socket.io-client axios react-dropzone
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const socket = io.connect('http://localhost:5000');

const App = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch initial messages from the server
    axios.get('/api/messages')
      .then(response => setMessages(response.data))
      .catch(err => console.error('Error fetching messages', err));

    // Listen for new messages from the server
    socket.on('message', message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      // Clean up the socket.io connection
      socket.off('message');
    };
  }, []);

  const handleMessageSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('text', text);
    formData.append('user', 'John'); // Replace with the currently logged in user
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    // Send message to the server
    axios.post('/api/messages', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        setText('');
        setSelectedImage(null);
      })
      .catch(err => console.error('Error sending message', err));
  };

  const handleImageDrop = acceptedFiles => {
    setSelectedImage(acceptedFiles[0]);
  };

  return (
    <div>
      <h1>Chat App</h1>

      <div>
        {messages.map(message => (
          <div key={message._id}>
            <p>{message.text}</p>
            {message.image && <img src={message.image} alt="Message" />}
            <p>{message.user}</p>
            <p>{message.createdAt}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleMessageSubmit}>
        <textarea
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="Enter your message"
        />
        <Dropzone onDrop={handleImageDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop an image or click to select</p>
            </div>
          )}
        </Dropzone>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;

