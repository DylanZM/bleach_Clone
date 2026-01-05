import locales from "../../locales/preFooter.json";

export default function PlayButton() {
  return (
    <img
      src={locales.PRE_FOOTER.PLAY_IMG}
      alt="Play Button"
      className="w-[180px] h-[180px] object-contain mx-auto"
    />
  );
}