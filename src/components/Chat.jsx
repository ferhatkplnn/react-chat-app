import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Chat = () => {
  const [parent, enableAnimations] = useAutoAnimate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const scroll = useRef(null);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const updatedMessages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMessages(updatedMessages);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const renderMessages = () =>
    messages.map((message) => <Message key={message.id} message={message} />);

  return (
    <>
      <main
        ref={parent}
        className="flex flex-col p-[10px] pb-14 relative overflow-auto h-full"
      >
        {renderMessages()}
        <span ref={scroll}></span>
      </main>

      {loading && <div className="text-center">Loading...</div>}
      <SendMessage scroll={scroll} />
    </>
  );
};

export default Chat;
