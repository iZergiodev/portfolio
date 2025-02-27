import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Gallery() {

  const { t } = useTranslation();

  const handlePress = () => {
    window.open(
      "https://front-flash4-devs.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="max-w-[1000px] h-[670px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[320px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Comming Soon
          </p>
          <h4 className="text-white font-medium text-large">Comming Soon</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.pinimg.com/736x/75/6c/9a/756c9a39d51bbe175df7a6f0fd01bde6.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[320px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Comming Soon
          </p>
          <h4 className="text-white font-medium text-large">Comming Soon</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.pinimg.com/736x/75/6c/9a/756c9a39d51bbe175df7a6f0fd01bde6.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[320px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Comming Soon
          </p>
          <h4 className="text-white font-medium text-large">Comming Soon</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.pinimg.com/736x/75/6c/9a/756c9a39d51bbe175df7a6f0fd01bde6.jpg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[360px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Comming Soon
          </p>
          <h4 className="text-black font-medium text-2xl">Comming Soon</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://i.pinimg.com/736x/75/6c/9a/756c9a39d51bbe175df7a6f0fd01bde6.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Comming Soon</p>
            <p className="text-black text-tiny">Comming Soon</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Comming Soon
          </Button>
        </CardFooter>
      </Card>
      <Card
        isPressable
        onPress={handlePress}
        isFooterBlurred
        className="w-full h-[360px] col-span-12 sm:col-span-7 hover:cursor-pointer hover:scale-105 transition duration-200"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Your day your way
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Your checklist for better sleep
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://i.gyazo.com/defc0d426305b4f9a5ff487458a84454.jpg"
        />
        <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
            <div className="flex justify-between p-2 pb-0 w-[150px]">
              <h1 className=" text-white font-bold text text-xl " >Flash4Devs</h1>
              <img src="/favicon1.png" alt="" className="w-[20px] h-[25px]"/>
            </div>
            <div className="p-2 pt-0">
              <p className="text-tiny text-white/60">{t('flash4devsDescription')}</p>
            </div>
            </div>
          </div>
          <Button
            className="flex flex-row justify-center items-center mr-10"
            radius="full"
            size="sm"
          >
            <img src="/react.svg" alt="" width="35px" />
            <img src="/tailwind.svg" alt="" width="35px" />
            <img src="/fastapi.svg" alt="" width="35px" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
