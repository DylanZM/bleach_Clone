import locales from "../locales/hero.json";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import ButtonLang from "./buttonLang";

export default function Hero() {
  const images = [locales.HERO.IMAGE_SRC, locales.HERO.IMAGE_VERTICAL_SRC];
  const texts = ["VISUAL 8", "TEASER 3"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-screen flex bg-black relative">
      <div className="flex-1 h-screen overflow-hidden flex items-start justify-start pl-20 relative">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="main"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full w-[120%] object-cover object-top absolute"
        />
      </div>
      <ButtonLang />

      <motion.h1
        key={`text-${currentImageIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="absolute text-8xl font-abril z-10 left-15 top-55 -translate-y-1/2 whitespace-nowrap text-black"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        {texts[currentImageIndex]}
      </motion.h1>

      <div className="flex-1 h-full flex flex-col items-center justify-center p-8 relative">
        <img
          src={locales.HERO.LOGO_SRC}
          alt="Logo"
          className="w-[65%] -translate-y-25"
        />
        <img
          src={locales.HERO.DESCRIPTION}
          alt="Description"
          className="w-[70%] -translate-y-15"
        />
      
        <span className="-translate-y-5 font-abril font-black text-[22px]">
          {locales.HERO.SOCIAL_MEDIA}
        </span>

        <div className="flex gap-6 -translate-y-2 mt-4">
          <a href="#" className="text-3xl hover:text-gray-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="text-3xl hover:text-gray-400 transition-colors">
            <FaTiktok />
          </a>
          <a href="#" className="text-3xl hover:text-gray-400 transition-colors">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}