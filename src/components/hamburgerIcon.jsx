import { motion } from "framer-motion";
import { useState } from "react";

const HamburgerIcon = ({ isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-center w-12 h-12 -translate-y-0.5"
      aria-label="Menu"
    >
      <motion.span
        className="absolute w-12 h-0.5 bg-white origin-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isOpen
            ? { rotate: 45, y: 0, opacity: 1, scale: 1 }
            : { 
                rotate: 0, 
                y: !isHovered ? -10 : -11, 
                opacity: 1, 
                scale: 1 
              }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute w-12 h-0.5 bg-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isOpen 
            ? { opacity: 0, scale: 0 } 
            : { 
                opacity: 1, 
                scale: 1,
                y: isHovered ? 1 : 0
              }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute w-12 h-0.5 bg-white origin-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isOpen
            ? { rotate: -45, y: 0, opacity: 1, scale: 1 }
            : { 
                rotate: 0, 
                y: !isHovered ? 10 : 11, 
                opacity: 1, 
                scale: 1 
              }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
};

export default HamburgerIcon;