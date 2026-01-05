import { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import PlayButton from "./PlayButton";
import VideoModal from "./VideoModal";

export default function PreFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden mt-33">
        <BackgroundVideo
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          onClick={() => setIsModalOpen(true)}
        />

        <div className="absolute z-10 flex items-center justify-center pointer-events-none">
          <PlayButton />
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}