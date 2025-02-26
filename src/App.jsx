import "./App.css";
import { useStore } from "./store/store";
import { LightMode } from "./pages/LightMode";
import { DarkMode } from "./pages/DarkMode";

// true es lightmode
// false es darkmode

function App() {
  const { language, theme, changeTheme, changeLanguage } = useStore();

  return <>{theme ? <DarkMode /> : <LightMode />}</>;
}

export default App;
