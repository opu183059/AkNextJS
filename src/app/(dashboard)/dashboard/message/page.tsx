"use client";
import MessageCard from "@/components/message/MessageCard";
import CustomLoader from "@/components/shared/CustomLoader";
import React, { useEffect, useState } from "react";

export type Tmessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
};

const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmessages = async () => {
      try {
        const response = await fetch("/api/message", { cache: "no-store" });
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchmessages();
  }, []);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <div>
      {messages.map((message: Tmessage) => (
        <MessageCard key={message._id} message={message} />
      ))}
    </div>
  );
};

export default MessagePage;
