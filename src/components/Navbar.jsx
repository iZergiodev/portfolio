import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useStore } from "../store/store";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { theme, changeTheme} = useStore();

    const { i18n } = useTranslation();
  

  return (
    <nav className="flex justify-end mr-5">
      <div className="flex gap-3 mr-10">
        <img
          onClick={() => i18n.changeLanguage("es")}
          src="spanish.svg"
          alt="bandera españa"
          width={30}
          className="hover:cursor-pointer"
        />
        <img
          onClick={() => i18n.changeLanguage("pr")}
          src="portugues.svg"
          alt="bandera portugal"
          width={30}
          className="hover:cursor-pointer"
        />
        <img
          onClick={() => i18n.changeLanguage("en")}
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
          sunColor={"black"}
          moonColor={"white"}
        />
      </div>
    </nav>
  );
};
