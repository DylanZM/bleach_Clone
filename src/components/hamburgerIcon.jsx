import { useState } from "react";

const HamburgerIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col gap-2.5 items-center transition-opacity -translate-y-0.5"
      aria-label="Menu"
    >
      <span 
        className={`w-12 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isHovered ? 'translate-y-1' : 'translate-y-0'
        }`}
      ></span>
      <span 
        className={`w-12 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isHovered ? 'translate-y-0' : 'translate-y-0'
        }`}
      ></span>
      <span 
        className={`w-12 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isHovered ? '-translate-y-1' : 'translate-y-0'
        }`}
      ></span>
    </button>
  );
};

export default HamburgerIcon;