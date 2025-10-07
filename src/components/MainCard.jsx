import { Card, CardFooter, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useStore } from "../store/store";

export default function MainCard() {
  const { t } = useTranslation();
  const { theme } = useStore();

  // Theme configurations
  const themeConfig = theme
    ? {
        // Dark mode
        gradientBorder: "from-[#1e40af] via-[#3b82f6] to-[#60a5fa]",
        textGradient: "from-[#1e40af] via-[#3b82f6] to-[#60a5fa]",
      }
    : {
        // Light mode
        gradientBorder: "from-[#bfdbfe] via-[#93c5fd] to-[#dbeafe]",
        textGradient: "from-[#bfdbfe] via-[#93c5fd] to-[#dbeafe]",
      };

  return (
    <Card className="w-full rounded-3xl overflow-hidden border border-gray-700 bg-black/40 backdrop-blur-sm relative group">
      {/* Profile image */}
      <div className="relative p-4">
        <div className="relative w-full aspect-[4/3]">
          <div className={`absolute -inset-1 bg-gradient-to-r ${themeConfig.gradientBorder} rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 z-0`}></div>
          <img
            alt="Sergio Carretero"
            className="relative object-cover rounded-2xl w-full h-full z-10"
            src="/sergio.jpeg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 pt-0">
        <h2 className={`text-lg font-bold bg-gradient-to-r ${themeConfig.textGradient} bg-clip-text text-transparent text-center`}>
          {t("role")}
        </h2>
        <p className="text-white/80 text-xs leading-relaxed text-center">
          {t("desc")}
        </p>
      </div>
    </Card>
  );
}
