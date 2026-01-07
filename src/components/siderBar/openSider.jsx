import { motion, AnimatePresence } from "framer-motion";

export default function OpenSider({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 md:left-20 top-0 right-0 bottom-0 z-40 bg-black overflow-hidden"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70" />

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/img/menu_bg.png')",
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 19%",
            }}
          />

          <div 
            className="relative z-10 h-full flex items-center justify-start px-4 md:pl-20"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="w-full max-w-4xl">
              <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-12 mb-8 md:mb-12">
                <motion.a
                  href="#top"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  TOP
                </motion.a>
                <motion.a
                  href="#introduction"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  INTRODUCTION
                </motion.a>
                <motion.a
                  href="#story"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  STORY
                </motion.a>
              </div>

              <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-12 mb-8 md:mb-12">
                <motion.a
                  href="#staff-cast"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  STAFF&CAST
                </motion.a>
                <motion.a
                  href="#character"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  CHARACTER
                </motion.a>
                <motion.a
                  href="#music"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  MUSIC
                </motion.a>
              </div>

              <div className="flex justify-start">
                <motion.a
                  href="#movie"
                  onClick={onClose}
                  className="text-white text-3xl md:text-5xl font-abril hover:text-hover transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  MOVIE
                </motion.a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}