import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import locales from "../../locales/preFooter.json";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 1.06,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const videoVariants = {
  hidden: { scale: 1.12 },
  visible: {
    scale: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

export default function BackgroundVideo({ isHovered, setIsHovered, onClick }) {
  const [videoError, setVideoError] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[65%] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {!videoError ? (
        <motion.iframe
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/FHH86-gHuJk?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=FHH86-gHuJk"
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

      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 bg-hover"
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
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ opacity: 0.65 }}
      />
    </motion.div>
  );
}