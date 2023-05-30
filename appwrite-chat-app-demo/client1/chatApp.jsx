import React, { useState, useEffect } from 'react';
import { Appwrite } from 'appwrite';

const endpoint = 'YOUR_APPWRITE_ENDPOINT';
const projectId = 'YOUR_APPWRITE_PROJECT_ID';

const client = new Appwrite();
client
  .setEndpoint(endpoint)
  .setProject(projectId);

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Subscribe to chat messages
    const chatSubscription = client.realtime.subscribe(['collections.document.create'], (payload) => {
      if (payload.collection === 'messages') {
        const message = payload.document;
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      // Unsubscribe from chat messages
      chatSubscription.unsubscribe();
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    try {
      const message = {
        content: newMessage,
        username,
        timestamp: Date.now(),
      };

      // Save the message to the Appwrite database
      await client.database.createDocument('messages', message);

      // Clear the input field
      setNewMessage('');
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Chat App</h1>

      {messages.map((message) => (
        <div key={message.$id}>
          <p>
            <strong>{message.username}:</strong> {message.content}
          </p>
          {message.image && <img src={message.image} alt="Shared" />}
        </div>
      ))}

      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
