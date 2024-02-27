import { auth } from "../firebase/config";

const LogOut = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <button
      onClick={logout}
      className="bg-darkGrayColor px-4 py-2 text-white hover:bg-darkGrayColor/90"
    >
      Logout
    </button>
  );
};

export default LogOut;
