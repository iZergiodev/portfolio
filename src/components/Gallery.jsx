import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();

  const handlePress = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-[100vw] h-52 space-y-1 sm:w-[50vw] sm:h-[75vh] sm:mb-15 gap-2 sm:grid grid-cols-12 grid-rows-2 sm:px-8 mt-25">
      <Card className="col-span-12 sm:col-span-4 h-full">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-center sm:object-cover"
          src="alien.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-full">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-center sm:object-cover"
          src="alien.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-full">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-center sm:object-cover"
          src="alien.jpg"
        />
      </Card>
      <Card
        isFooterBlurred
        isPressable
        onPress={() => handlePress("https://youare-notalone.duckdns.org/")}
        className="w-full h-full col-span-12 sm:col-span-5 hover:scale-105 transition duration-200"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover sm:object-cover "
          src="youarenotalone.svg"
        />
        <CardFooter className="hidden sm:flex sm:absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <div className="flex justify-between p-2 pb-0 w-[250px]">
                <h1 className=" text-white font-bold text text-xl ">
                  {t("youarenotalone")}
                </h1>
              </div>
              <div className="p-2 pt-0">
                <p className="text-tiny text-white/60 text-left">
                  {t("youarenotalonedesc")}
                </p>
              </div>
            </div>
          </div>
          <Button
            className="flex flex-row justify-center items-center mr-10"
            radius="full"
            size="sm"
          >
            <img src="/react.svg" alt="" width="35px" />
            <img src="/TypeScript.svg" alt="" width="35px" />
            <img src="/MaterialUI.svg" alt="" width="35px" />
          </Button>
        </CardFooter>
      </Card>
      <Card
        isPressable
        onPress={() => handlePress("https://front-flash4-devs.vercel.app/")}
        isFooterBlurred
        className="pb-20 sm:pb-0 col-span-12 sm:col-span-7 hover:cursor-pointer hover:scale-105 transition duration-200"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="portadaF4D.jpg"
        />
        <CardFooter className="hidden sm:flex sm:absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <div className="flex justify-between p-2 pb-0 w-[150px]">
                <h1 className=" text-white font-bold text text-xl ">
                  Flash4Devs
                </h1>
                <img src="/favicon1.png" alt="" className="w-[20px] h-[25px]" />
              </div>
              <div className="p-2 pt-0">
                <p className="text-tiny text-white/60">
                  {t("flash4devsDescription")}
                </p>
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
