import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useStore } from "../store/store";

export const Navbar = () => {
  const { language, theme, changeTheme, changeLanguage } = useStore();

  return (
    <nav className="flex justify-end mr-5">
      <div className="flex gap-3 mr-10">
        <img
          src="spanish.svg"
          alt="bandera españa"
          width={30}
          className="hover:cursor-pointer"
        />
        <img
          src="portugues.svg"
          alt="bandera portugal"
          width={30}
          className="hover:cursor-pointer"
        />
        <img
          src="english.svg"
          alt="bandera inglaterra"
          width={30}
          className="hover:cursor-pointer"
        />
      </div>
      <div>
        <DarkModeSwitch
          checked={theme}
          onChange={changeTheme}
          size={40}
          sunColor={"yellow"}
          moonColor={"purple"}
        />
      </div>
    </nav>
  );
};
