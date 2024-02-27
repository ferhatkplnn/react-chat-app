import SignIn from "./SignIn";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-chatInputColor h-20 flex justify-between items-center p-4">
      <h1 className="text-darkGrayColor text-3xl">Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
