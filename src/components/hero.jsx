import locales from "../locales/hero.json";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import ButtonLang from "./buttonLang";
import Miniatures from "./miniatures";

export default function Hero() {
  const images = [locales.HERO.IMAGE_SRC, locales.HERO.IMAGE_VERTICAL_SRC];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageVariants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
    },
  };

  return (
    <section className="w-full h-screen flex bg-black relative overflow-hidden">
      <div className="flex-1 h-screen pl-20 flex items-center relative">
        <div className="h-full w-[85%] relative flex items-center justify-start overflow-hidden">
          <AnimatePresence initial={true}>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="main"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="absolute h-full max-w-full object-contain"
            />
          </AnimatePresence>

          <div className="absolute right-0 top-0 z-20 -translate-x-2">
            <Miniatures
              currentIndex={currentImageIndex}
              onSelectImage={setCurrentImageIndex}
            />
          </div>
        </div>
      </div>

      <ButtonLang />

      <div className="flex-1 h-full flex flex-col items-center justify-center p-8 relative -translate-x-15">
        <img
          src={locales.HERO.LOGO_SRC}
          alt="Logo"
          className="w-[70%] -translate-y-24"
        />
        <img
          src={locales.HERO.DESCRIPTION}
          alt="Description"
          className="w-[70%] -translate-y-16"
        />

        <span className="-translate-y-6 font-abril font-black text-[22px]">
          {locales.HERO.SOCIAL_MEDIA}
        </span>

        <div className="flex gap-6 -translate-y-3 mt-4">
          <a className="text-3xl hover:text-gray-400 transition-colors">
            <FaInstagram />
          </a>
          <a className="text-3xl hover:text-gray-400 transition-colors">
            <FaTiktok />
          </a>
          <a className="text-3xl hover:text-gray-400 transition-colors">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
