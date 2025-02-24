import Particles from "./components/Particles";
import "./App.css";

function App() {

  const handleBoton = () => {
    alert('hola')
  }
  return (
    <>
      <div className="w-screen h-screen bg-red-500">
        <Particles
          particleColors={["#fffff", "#071013"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        >

          <h1 className="text-8xl text-amber-100 z-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat incidunt alias facilis obcaecati nihil voluptate dolores eaque, modi accusamus corporis esse quod quos dolorem mollitia! Veniam debitis voluptas tenetur?</h1>
          <button onClick={handleBoton} className="text-white border-amber-400 hover:cursor-pointer">HOLA</button>
        </Particles>
      </div>
    </>
  );
}

export default App;
