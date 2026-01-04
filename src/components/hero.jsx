import locales from "../locales/hero.json";

export default function Hero() {
  return (
    <section className="w-full h-screen flex bg-black">
      {/* Imagen izquierda */}
      <div className="w-1/2 h-screen overflow-hidden flex items-start justify-start pl-20">
        <img
          src={locales.HERO.IMAGE_SRC}
          alt="main"
          className="h-full w-[120%] object-cover object-top"
        />
      </div>

      {/* Contenido derecha */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center text-white p-8">
        {/* Contenido */}
      </div>
    </section>
  );
}
