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
    <section className="relative w-full min-h-screen flex bg-black overflow-hidden">
      <div className="flex-1 flex items-center relative">
        <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
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
              className=" absolute inset-0 w-[91.5%] h-full object-cover"
            />
          </AnimatePresence>

          <div className="h-full w-full relative flex items-start justify-end overflow-hidden">
            <Miniatures
              currentIndex={currentImageIndex}
              onSelectImage={setCurrentImageIndex}
            />
          </div>
        </div>
      </div>

      <ButtonLang />

      <div className="flex-1 h-full flex flex-col items-center justify-center gap-8 p-8 mt-10 relative">
        <img src={locales.HERO.LOGO_SRC} alt="Logo" className="w-[70%]" />
        <img
          src={locales.HERO.DESCRIPTION}
          alt="Description"
          className="w-[70%]"
        />

        <span className="font-abril font-black text-[22px] mt-4">
          {locales.HERO.SOCIAL_MEDIA}
        </span>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
