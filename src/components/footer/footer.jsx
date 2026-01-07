import PageTop from "../pagetop";
import locales from "../../locales/footer.json";

export default function Footer() {
  return (
    <footer className="w-full">
      <PageTop />
      
      <div className="w-full py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4 text-center">
            <a 
              href="#" 
              className="text-gray-light hover:underline transition-all font-noto text-xs tracking-wider"
            >
              {locales.FOOTER.CONTACT}
            </a>
            <span className="text-gray-light text-xs">|</span>
            <a 
              href="#" 
              className="text-gray-light hover:underline transition-all font-noto text-xs tracking-wider"
            >
              {locales.FOOTER.COPYRIGHTS}
            </a>
            <span className="text-gray-light text-xs">|</span>
            <a 
              href="#" 
              className="text-gray-light hover:underline transition-all font-noto text-xs tracking-wider"
            >
              {locales.FOOTER.PRIVACY}
            </a>
            <span className="text-gray-light text-xs">|</span>
            <a 
              href="#" 
              className="text-gray-light hover:underline transition-all font-noto text-xs tracking-wider"
            >
              {locales.FOOTER.ANIPLEX}
            </a>
          </div>

          <p className="text-center text-gray-light text-[10px] md:text-[11px] mb-2 font-noto px-4">
            {locales.FOOTER.JAPAN}
          </p>

          <p className="text-center text-gray-light text-[10px] md:text-[11px] font-noto">
            {locales.FOOTER.COPYRIGHT_NOTICE}
          </p>
        </div>
      </div>
    </footer>
  );
}