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
          className="fixed left-20 top-0 right-0 bottom-0 z-40 bg-black"
          style={{
            backgroundImage: "url('/img/menu_bg.png')",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 19%",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 h-full flex items-center justify-center px-20">
            <nav className="w-full max-w-6xl">
              <div className="flex justify-center gap-12 mb-12">
                <motion.a
                  href="#top"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  TOP
                </motion.a>
                <motion.a
                  href="#introduction"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  INTRODUCTION
                </motion.a>
                <motion.a
                  href="#story"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  STORY
                </motion.a>
              </div>

              {/* Segunda fila */}
              <div className="flex justify-center gap-12 mb-12">
                <motion.a
                  href="#staff-cast"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  STAFF&CAST
                </motion.a>
                <motion.a
                  href="#character"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  CHARACTER
                </motion.a>
                <motion.a
                  href="#music"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  MUSIC
                </motion.a>
              </div>

              {/* Tercera fila */}
              <div className="flex justify-center">
                <motion.a
                  href="#movie"
                  className="text-white text-4xl font-abril hover:text-gray-300 transition-colors"
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