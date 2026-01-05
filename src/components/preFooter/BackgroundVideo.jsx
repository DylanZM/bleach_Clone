import { motion } from "framer-motion";
import { useState } from "react";
import locales from "../../locales/preFooter.json";

export default function BackgroundVideo({ isHovered, setIsHovered, onClick }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <div
      className="relative w-full h-[65%] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {!videoError ? (
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/FHH86-gHuJk?autoplay=1&mute=1&loop=1&playlist=FHH86-gHuJk&controls=0&rel=0"
          alt={locales.PRE_FOOTER.ALT_PLAY_IMG}
          allow="autoplay"
          onError={() => setVideoError(true)}
          style={{
            width: "177.77777778vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            opacity: 0.5,
          }}
        />
      ) : (
        <img
          src={locales.PRE_FOOTER.ALT_PLAY_IMG}
          alt="Video alternativo"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
      )}

      <div className="absolute inset-0 bg-white opacity-5" />
      <motion.div
        className="absolute inset-0 bg-[#CF6F32]"
        animate={
          isHovered
            ? {
                clipPath:
                  "polygon(0 0, 100% 0, 105% 50%, 100% 100%, 0 100%)",
              }
            : {
                clipPath: "polygon(0 0, 0 0, 0 50%, 0 100%, 0 100%)",
              }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ opacity: 0.65 }}
      />
    </div>
  );
}