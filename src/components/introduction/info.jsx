import locales from "../../locales/introduction.json";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <section className="p-8 max-w-7xl">
      <motion.h1 
        className="text-8xl font-bold mb-10 font-abril text-title -mt-10 ml-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {locales.INTRODUCTION.TITLE}
      </motion.h1>

      <div className="flex gap-8">
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src={locales.INTRODUCTION.IMG_INFO}
            alt="Bleach Introduction"
            className="w-[40%] h-full object-cover ml-10"
          />
        </motion.div>

        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          <p className="mb-6 font-noto text-[20px] leading-relaxed tracking-wide font-light">
            {locales.INTRODUCTION.CONTENT}
          </p>

          <p className="mb-6 font-noto text-[20px] leading-relaxed tracking-wide font-light">
            {locales.INTRODUCTION.SUB_CONTENT}
          </p>

          <p className="mb-4 font-noto text-3xl leading-relaxed tracking-wide mr-10 line-clamp-2 font-light">
            Now, <span className="font-bold">"Thousand-Year Blood War"</span>,
            the concluding arc of the iconic anime, is finally about to unfold.
          </p>

          <p className="mb-6 font-noto text-[20px] leading-relaxed tracking-wide font-light whitespace-pre-line">
            {locales.INTRODUCTION.PRODUCTION}
          </p>

          <p className="mb-6 font-noto text-3xl leading-relaxed tracking-wide font-light">
            {locales.INTRODUCTION.CLOSING}
          </p>

          <p className="mb-6 font-noto text-3xl leading-relaxed tracking-wide font-light">
            {locales.INTRODUCTION.QUESTION}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
