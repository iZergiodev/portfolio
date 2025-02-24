import Particles from "./components/Particles";
import "./App.css";

function App() {
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
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-10">
              <div className="w-[570px] flex flex-col justify-center items-center bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg gap-2">
                <div className="w-[410px] h-[350px] mt-3 shadow-lg">
                  <img
                    src="/teste.jpg"
                    alt="Foto de exemplo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#00CED1] p-4 h-[170px] m-3 rounded-2xl">
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
                <button className="w-35 px-4 py-2 bg-[#8B00FF] text-[#FFFFFF] rounded hover:bg-[#A033FF] cursor-pointer shadow-lg">
                  Idioma
                </button>
                <button className="w-35 px-4 py-2 bg-[#00CED1] text-[#FFFFFF] rounded hover:bg-[#33E0E3] cursor-pointer shadow-lg">
                  Tema
                </button>
              </div>

              <div className="w-3/4 h-3/4 bg-[#2D2D2D] rounded-lg flex items-center justify-center">
                <div className="w-[480px]">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="w-[200px] h-[210px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto I</span>
                    </div>
                    <div className="w-[200px] h-[210px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto II</span>
                    </div>
                    <div className="w-[200px] h-[210px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
                      <span className="text-[#E0E0E0]">Projecto III</span>
                    </div>
                    <div className="w-[200px] h-[210px] bg-[#6B7280] rounded-lg flex items-center justify-center shadow-lg border-1 border-b-[#6B7280]">
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

export default App;