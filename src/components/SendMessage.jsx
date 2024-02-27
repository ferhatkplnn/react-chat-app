import { useState } from "react";
import { auth, db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!auth.currentUser || !input) return;
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Message"
        className="w-full text-xl p-3 bg-chatInputColor text-darkGrayColor  outline-none border-none"
      />
      <button type="submit" className="w-[20%] bg-green-500">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
