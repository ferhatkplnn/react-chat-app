import { auth } from "../firebase/config";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-sentMessageColor text-white flex-row-reverse text-end float-right rounded-br-full`,
  received: `bg-receivedMessageColor text-gray-900 float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p className="">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
