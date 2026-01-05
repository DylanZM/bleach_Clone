import HamburgerIcon from "./hamburgerIcon";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { SiLine } from "react-icons/si";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-black border-r border-purple-600/30 flex flex-col items-center justify-between py-8 z-50">
      <HamburgerIcon />
      
      <div className="flex flex-col gap-6">
        <a 
          href="#" 
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="X"
        >
          <FaXTwitter size={24} />
        </a>

        <a 
          href="#" 
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <FaFacebookF size={24} />
        </a>

        <a 
          href="#" 
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LINE"
        >
          <SiLine size={24} />
        </a>
      </div>

    </aside>
  );
};

export default Sidebar;