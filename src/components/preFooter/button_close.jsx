import { motion } from "framer-motion";

export default function ButtonClose({ onClick }) {
  return (
    <motion.button 
      onClick={onClick}
      className="w-15 h-15 bg-close-button flex items-center justify-center border-2 border-white hover:bg-close-button-dark transition-colors"
      aria-label="Close"
      initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <svg 
        width="35" 
        height="35" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line 
          x1="4" 
          y1="4" 
          x2="28" 
          y2="28" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="square"
        />
        <line 
          x1="28" 
          y1="4" 
          x2="4" 
          y2="28" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="square"
        />
      </svg>
    </motion.button>
  );
}