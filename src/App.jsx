import Hero from "./components/hero";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-bg-main text-white z-10">
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;