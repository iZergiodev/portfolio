import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import GradientText from "./GradientText";
import "./MainCardLight.css";
import { useStore } from "../store/store";

export default function MainCardLight() {
  const { t } = useTranslation();

  const { theme, changeTheme } = useStore();

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <div className="gradient-bordeer">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src="sergio.jpeg"
            width={320}
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-center uppercase font-bold text-lg mb-3">
          <GradientText
            colors={["#FF8000", "#FF0000", "#FFFF00", "#FF0000", "#FFFF00"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class type-text"
          >
            {t("role")}
          </GradientText>
        </p>
        <p
          className={`type-text text-tiny max-w-[40ch] text-m px-5 lg:px-0 lg:text-lg text-center ${
            theme === true ? "text-white" : "text-white"
          }`}
        >
          {t("desc")}
        </p>
      </CardBody>
    </Card>
  );
}
