import locales from "../locales/pagetop.json";

export default function PageTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex justify-center my-8">
      <img
        src={locales.PAGE_TOP.TOP_IMG}
        alt="Page Top"
        onClick={scrollToTop}
        className="cursor-pointer transition-all duration-300 brightness-0 invert hover:brightness-100 hover:invert-0"
        style={{
          filter: 'brightness(0) invert(1)',
          transition: 'filter 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(48%) sepia(89%) saturate(1547%) hue-rotate(348deg) brightness(95%) contrast(90%)'}
        onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
      />
    </div>
  )
}