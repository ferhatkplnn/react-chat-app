import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-backgroundColor mt-10 shadow-xl border relative">
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
        {user && <Chat />}
        {/* <Chat /> */}
      </section>
    </div>
  );
};

export default App;
