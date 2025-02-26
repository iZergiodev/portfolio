import { Navbar } from "../components/Navbar";
import Particles from "../components/Particles";
import { useStore } from "../store/store";

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
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
              <div className="w-[670px] flex flex-col justify-center items-center bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg gap-2">
                <div className="w-[350px] h-[350px] mt-3 shadow-lg">
                  <img
                    src="/teste.jpg"
                    alt="Foto de exemplo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#00CED1] p-4 h-[200px] m-3 rounded-2xl">
                  <p className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

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

            <div className="w-1/2 h-full flex flex-col justify-center items-center relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <Navbar />
              </div>

              <div className="w-[1000px] h-[700px] bg-[#2D2D2D] rounded-lg flex items-center justify-center mr-30">
                <div className="w-[800px]">
                  <div className="grid grid-cols-2 gap-8 p-10">
                    <div className="w-[300px] h-[290px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto I</span>
                    </div>
                    <div className="w-[300px] h-[290px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto II</span>
                    </div>
                    <div className="w-[300px] h-[290px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto III</span>
                    </div>
                    <div className="w-[300px] h-[290px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto IV</span>
                    </div>
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
