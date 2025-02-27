import Gallery from "../components/Gallery";
import MainCard from "../components/MainCard";
import { Navbar } from "../components/Navbar";
import Particles from "../components/Particles";
import { useStore } from "../store/store";
import { motion } from "framer-motion";

export function DarkMode() {
  const { language, theme, changeTheme, changeLanguage } = useStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1, 
      boxShadow: "0px 0px 15px rgba(0, 206, 209, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

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

              <div className="w-[230px]">
                <motion.div
                  className="grid grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { src: "/linkedin.svg", alt: "linkedin", size: "w-[30px]" },
                    { src: "/github.svg", alt: "github", size: "w-[70px]" },
                    { src: "/correo.svg", alt: "correo", size: "w-[30px]" },
                    {
                      src: "/curriculo.svg",
                      alt: "curriculo",
                      size: "w-[30px]",
                    },
                  ].map((icon, index) => (
                    <motion.div
                      key={index}
                      className="w-[65px] h-[65px] bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] rounded-full flex items-center justify-center shadow-lg"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <motion.img
                        src={icon.src}
                        alt={icon.alt}
                        className={icon.size}
                        whileHover={{ rotate: 10 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
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
