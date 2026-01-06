import { useState } from "react";
import HamburgerIcon from "../hamburgerIcon";
import OpenSider from "./openSider";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <aside className="sticky top-0 h-screen w-20 bg-black border-r border-white flex flex-col items-center justify-between py-8 z-40">
        <HamburgerIcon 
          isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
        
        <div className="flex flex-col gap-2 -mb-6">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="X"
          >
            <FaXTwitter size={22} />
          </a>

          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={22} />
          </a>

          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LINE"
          >
            <SiLine size={22} />
          </a>
        </div>
      </aside>

      <OpenSider isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Sidebar;