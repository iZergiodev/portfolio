import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import GradientText from "./GradientText";
import "./MainCard.css";
import { useStore } from "../store/store";

export default function MainCard() {
  const { t } = useTranslation();
  const { theme } = useStore();

  // Theme configurations
  const themeConfig = theme
    ? {
        // Dark mode
        borderClass: "gradient-border-dark",
        gradientColors: ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
      }
    : {
        // Light mode
        borderClass: "gradient-border-light",
        gradientColors: ["#FF8000", "#FF0000", "#FFFF00", "#FF0000", "#FFFF00"],
      };

  return (
    <Card className="py-3 max-w-[280px]">
      <CardHeader className="pb-0 pt-2 px-3 flex-col">
        <div className={themeConfig.borderClass}>
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src="sergio.jpeg"
            width={260}
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-center uppercase font-bold text-base mb-2">
          <GradientText
            colors={themeConfig.gradientColors}
            animationSpeed={3}
            showBorder={false}
            className="custom-class type-text"
          >
            {t("role")}
          </GradientText>
        </p>
        <p className="type-text text-tiny max-w-[40ch] whitespace-pre-line text-sm px-4 lg:px-2 text-center text-white">
          {t("desc")}
        </p>
      </CardBody>
    </Card>
  );
}
