import React from "react";

const SendMessage = () => {
  return (
    <form className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0">
      <input
        type="text"
        placeholder="Message"
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
      />
      <button type="submit" className="w-[20%] bg-green-500">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
