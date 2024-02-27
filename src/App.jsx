import Navbar from "./components/Navbar";

import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-backgroundColor mt-10 shadow-xl border relative">
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
      </section>
    </div>
  );
};

export default App;
