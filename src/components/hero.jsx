import locales from "../locales/hero.json";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import ButtonLang from "./buttonLang";
import Miniatures from "./miniatures";

export default function Hero() {
  const images = [locales.HERO.IMAGE_SRC, locales.HERO.IMAGE_VERTICAL_SRC];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="relative w-full min-h-screen flex bg-black overflow-hidden">
      <div className="flex-1 flex items-center relative">
        <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-[91.5%] h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="absolute right-0 top-0 h-full flex items-start justify-end overflow-hidden z-10">
          <Miniatures
            currentIndex={currentImageIndex}
            onSelectImage={setCurrentImageIndex}
          />
        </div>
      </div>

      <ButtonLang />

      <div className="flex-1 h-full flex flex-col items-center justify-center gap-8 p-8 mt-12 relative">
        <motion.img
          src={locales.HERO.LOGO_SRC}
          alt="Logo"
          className="w-[65%]"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        />
        <motion.img
          src={locales.HERO.DESCRIPTION}
          alt="Description"
          className="w-[65%] mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        />

        <motion.span
          className="font-abril font-bold text-[22px] mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          {locales.HERO.SOCIAL_MEDIA}
        </motion.span>

        <div className="flex gap-6 -translate-y-3">
          <motion.a
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors"
            aria-label="Twitter"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaXTwitter size={28} />
          </motion.a>
          <motion.a
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors"
            aria-label="Instagram"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={28} />
          </motion.a>
          <motion.a
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors"
            aria-label="TikTok"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTiktok size={28} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}