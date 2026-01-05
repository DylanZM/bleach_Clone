import Hero from "./components/hero";
import Sidebar from "./components/sidebar";
import PreFooter from "./components/preFooter/preFooter";

function App() {
  return (
    <div className="min-h-screen w-full flex bg-bg-main text-white">
      <Sidebar />

      <main className="flex-1">
        <Hero />
        <PreFooter />
      </main>
    </div>
  );
}

export default App;