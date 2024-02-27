import { useState } from "react";
import { sendMessageToFirebase } from "../firebase/actions";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input) return;

    const isSending = await sendMessageToFirebase(input);

    if (!isSending) return;

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={sendMessage}
      className="flex h-14 w-full max-w-[728px] absolute bottom-0 text-xl"
    >
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Message"
        className="w-full p-3 text-xl bg-chatInputColor text-darkGrayColor outline-none border-none"
      />
      <button type="submit" className="w-[20%] bg-red-600 text-white">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
