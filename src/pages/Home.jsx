import Gallery from "../components/Gallery";
import MainCard from "../components/MainCard";
import IconPlaceholders from "../components/IconPlaceholders";
import { Navbar } from "../components/Navbar";
import Particles from "../components/Particles";
import { useStore } from "../store/store";
import { useState } from "react";
import { Modal } from "../components/Modal";

export function Home() {
  const { theme } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Theme-specific configurations
  const themeConfig = theme
    ? {
      // Dark mode (theme = true)
      bgColor: "bg-black",
      bgImage: "/fondo.jpg",
      particleColors: ["#8B00FF", "#00CED1"],
      gradientColors: "from-[#40ffaa] via-[#4079ff] to-[#40ffaa]",
    }
    : {
      // Light mode (theme = false)
      bgColor: "bg-white",
      bgImage: "/fondoblanco.jpg",
      particleColors: ["#FF0000", "#FFFF00"],
      gradientColors: "from-[#FF0000] via-[#FF8000] to-[#FFFF00]",
    };

  return (
    <>
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <Navbar />
      </div>
      <div
        className={`w-screen relative h-screen ${themeConfig.bgColor} overflow-auto`}
      >
        <img
          src={themeConfig.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Particles
          particleColors={themeConfig.particleColors}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="absolute inset-0 w-full h-full"
        >
          <div className="w-full h-full flex sm:flex-row flex-col justify-center items-center gap-6 sm:gap-8 px-4 sm:px-8 pt-20 pb-6 sm:py-0">
            <div className="w-full max-w-md sm:max-w-none sm:w-[20%] sm:h-[85vh] flex flex-col gap-3">
              <div className="flex-shrink-0 flex items-center justify-center">
                <MainCard />
              </div>
              <div className="hidden sm:flex sm:flex-1">
                <IconPlaceholders />
              </div>
            </div>

            <div className="w-full sm:w-[80%] h-[60vh] sm:h-[85vh] flex items-center justify-center">
              <Gallery />
            </div>
          </div>
        </Particles>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}
