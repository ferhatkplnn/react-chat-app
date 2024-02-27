import Navbar from "./components/Navbar";

const App = () => {
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
