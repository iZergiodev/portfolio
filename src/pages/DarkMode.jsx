import Gallery from "../components/Gallery";
import MainCard from "../components/MainCard";
import { Navbar } from "../components/Navbar";
import Particles from "../components/Particles";
import { useStore } from "../store/store";
import { Image } from "@heroui/react";

export function DarkMode() {
  const { language, theme, changeTheme, changeLanguage } = useStore();

  return (
    <>
      <div className="w-screen h-screen bg-black">
        <Particles
          particleColors={["#8B00FF", "#00CED1"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        >
          <div className="w-full h-full flex">
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-6 mr-10">
              <MainCard />

              <div className="w-[480px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-[220px] h-[110px] bg-[#8B00FF] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                    <span className="text-white">Linkedin</span>
                  </div>
                  <div className="w-[220px] h-[110px] bg-[#8B00FF] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                    <span className="text-white">Github</span>
                  </div>
                  <div className="w-[220px] h-[110px] bg-[#8B00FF] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                    <span className="text-white">CV</span>
                  </div>
                  <div className="w-[220px] h-[110px] bg-[#8B00FF] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                    <span className="text-white">Contacto</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center items-center relative mr-10">
              <div className="absolute top-4 right-4 flex gap-2">
                <Navbar />
              </div>

              <div className="w-[1000px] h-full rounded-lg flex items-center justify-center mr-30">
                <div className="w-full">
                  <div className=" gap-8">
                    <Gallery />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Particles>
      </div>
    </>
  );
}
