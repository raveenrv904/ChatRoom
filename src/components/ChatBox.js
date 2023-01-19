import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { query, collection, orderBy, onSnapshot, limit } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));

        const unsubscribe = onSnapshot(q, (queryShot) => {
            let messages = [];
            queryShot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            })

            setMessages(messages);
            return () => unsubscribe;
        })
    }, []);
    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} />
        </main>
    );
};

export default ChatBox;