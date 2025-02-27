import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import GradientText from "./GradientText";
import './MainCard.css';
import { useStore } from "../store/store";


export default function MainCard() {
  const { t } = useTranslation();

    const { theme, changeTheme} = useStore();
  

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <div className="gradient-border">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="yagop.jpg"
            width={320}
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-center uppercase font-bold text-lg mb-3">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            {t("role")}
          </GradientText>
        </p>
        <p className={`text-tiny max-w-[50ch] text-center ${theme === true ? 'text-white' : 'text-black'}`} >
          {t("desc")}
        </p>
      </CardBody>
    </Card>
  );
}
