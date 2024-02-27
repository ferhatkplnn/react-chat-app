import { logoutToFirebase } from "../firebase/actions";

const LogOut = () => {
  return (
    <button
      onClick={logoutToFirebase}
      className="bg-darkGrayColor px-4 py-2 text-white hover:bg-darkGrayColor/90"
    >
      Logout
    </button>
  );
};

export default LogOut;
