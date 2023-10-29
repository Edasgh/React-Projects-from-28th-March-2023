import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:8080/api/chats");
    // const data = await axios.get("/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <div className="chat-page">
        {chats.map((chat) => (
          <div className="chat" key={chat._id}>
            <p className="chat-name">{chat.chatName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatPage;
