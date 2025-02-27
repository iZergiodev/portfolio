import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import GradientText from "./GradientText";


export default function MainCard() {
  const { t } = useTranslation();

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="yagop.jpg"
          width={300}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-center uppercase font-bold text-white text-lg">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            {t("role")}
          </GradientText>
        </p>
        <p className="text-white text-tiny max-w-[470px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          officiis sunt ratione enim autem. Delectus amet facilis laudantium
          iure nesciunt excepturi? Alias ratione nulla provident nobis
          accusantium esse voluptas quasi!
        </p>
      </CardBody>
    </Card>
  );
}
