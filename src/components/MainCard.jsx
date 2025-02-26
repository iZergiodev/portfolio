import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function MainCard() {
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
        <p className="text-center uppercase font-bold text-white text-lg">FrontEnd Developer</p>
        <p className="text-white text-tiny max-w-[470px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis sunt ratione enim autem. Delectus amet facilis laudantium iure nesciunt excepturi? Alias ratione nulla provident nobis accusantium esse voluptas quasi!</p>
      </CardBody>
    </Card>
  );
}
