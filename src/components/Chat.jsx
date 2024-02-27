import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messagesTemp = [];
      querySnapshot.forEach((doc) => {
        messagesTemp.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setMessages(messagesTemp);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Component */}
      <SendMessage />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
