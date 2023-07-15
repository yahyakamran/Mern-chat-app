import React, { useEffect, useState } from "react";
import axios from "../http";

function ChatPage() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chats");
      setChats(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default ChatPage;
