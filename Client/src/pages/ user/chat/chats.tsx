import React, { useState, useEffect } from "react";
import Chat from "./chat";
import { useAuthContext } from "../../../context/authContext";

const Chats = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { authUser } = useAuthContext();
  const id = authUser._id;
  useEffect(() => {
    const fetchConversations = async () => {
      const endpoint = authUser.user === 'teacher' 
        ? "/api/conversation/getConversation/teacher" 
        : "/api/conversation/getConversation/";
        
      try {
        const response = await fetch(endpoint,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({_id:id})
        });
        const data = await response.json();
        console.log(data);
        setConversations(data);
      } catch (error) {
        console.error("Failed to fetch conversations:", error);
      }
    };

    fetchConversations();
  }, [authUser]);

  return (
    <div>
      <h1>Conversations</h1>
      <ul>
        {conversations.map((convo) => (
          <li key={convo._id} onClick={() => setSelectedConversation(convo._id)}>
            {convo.convoFor.paperName}
          </li>
        ))}
      </ul>

      {selectedConversation && (
        <Chat id={selectedConversation} />
      )}
    </div>
  );
};

export default Chats;

