import Hero from "./components/hero";
import Sidebar from "./components/siderBar/sidebar";
import PreFooter from "./components/preFooter/preFooter";
import Info from "./components/introduction/info";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="min-h-screen w-full flex bg-bg-main text-white ">
      <Sidebar />

      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <PreFooter />
        <Info />
        <Footer />
      </main>
    </div>
  );
}

export default App;