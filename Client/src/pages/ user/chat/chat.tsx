import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useAuthContext } from "../../../context/authContext";


const socket = io("http://localhost:5000");

const Chat = ({ id }) => {
  const { authUser } = useAuthContext();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [senderId, setSenderId] = useState("");
  const [isTeacher, setIsTeacher] = useState(authUser.user === "teacher");

  console.log(id);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/message/${id}`);
        const data = await response.json();
        setMessages(data);
        console.log(messages);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [id]);

  useEffect(() => {
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("newMessage");
  }, []);

  const sendMessage = async () => {
    const messageData = {
      isTeacher,
      senderId:authUser._id,
      conversationId: id,
      message: newMessage,
    };
    
    console.table(messageData);
    console.log(id);

    try {
      const response = await fetch("/api/message/sendmessages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      const data = await response.json();
      socket.emit("sendMessage", data);
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div>
      <h2>Group Chat</h2>
      <div>
        {messages.map((msg, index) => (
              <div className="chat chat-start">
  <div key={msg._id} className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={msg.senderId.profilePic}/>
    </div>
  </div>
  <div className="chat-bubble">{msg.message}</div>
</div>
        ))}
      </div>
       <input
        type="text"
        value={newMessage}
        placeholder="Message"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;

