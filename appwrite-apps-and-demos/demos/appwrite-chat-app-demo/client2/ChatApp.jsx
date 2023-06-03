import React, { useState, useEffect } from 'react';
import { Appwrite } from 'appwrite';

const endpoint = 'YOUR_APPWRITE_ENDPOINT';
const projectId = 'YOUR_APPWRITE_PROJECT_ID';
const collectionId = 'YOUR_APPWRITE_COLLECTION_ID';
const realtimeChannelId = 'YOUR_APPWRITE_REALTIME_CHANNEL_ID';

const client = new Appwrite();
client.setEndpoint(endpoint).setProject(projectId);

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Subscribe to real-time messages
    const realtime = client.realtime();
    realtime.subscribe(realtimeChannelId);

    realtime.onMessage((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Fetch existing messages
    client.database
      .listDocuments(collectionId)
      .then((response) => {
        setMessages(response.documents);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });

    return () => {
      // Unsubscribe from real-time messages
      realtime.unsubscribe(realtimeChannelId);
    };
  }, []);

  const sendMessage = () => {
    client.database
      .createDocument(collectionId, { message: newMessage })
      .then(() => {
        setNewMessage('');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.$id}>{message.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatApp;
