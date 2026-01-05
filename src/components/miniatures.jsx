import locales from "../locales/hero.json";
import { motion, AnimatePresence } from "framer-motion";

export default function Miniatures({ currentIndex, onSelectImage }) {
  const images = [
    locales.HERO.IMAGE_SRC,
    locales.HERO.IMAGE_VERTICAL_SRC,
  ];

  const texts = ["KEYVISUAL 8", "TEASER 3"];

  return (
    <div className="flex flex-col">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelectImage(index)}
          className="relative w-12 h-[120px] flex-shrink-0 overflow-hidden"
        >
          <img
            src={image}
            alt={`thumbnail-${index}`}
            className="w-full h-full object-cover opacity-70 "
          />

          <AnimatePresence mode="wait">
            <motion.span
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className={`absolute text-[15px] font-abril font-bold tracking-wider right-8 top-14 -translate-y-14 whitespace-nowrap transition-colors hover:text-white
                ${
                  currentIndex === index
                    ? "text-white"
                    : "text-black"
                }`}
              style={{
                writingMode: "vertical-rl",
                transform: "translateY(-50%) rotate(180deg)",
              }}
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
}