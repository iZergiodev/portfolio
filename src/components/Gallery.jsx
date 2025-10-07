import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useStore } from "../store/store";

export default function Gallery() {
  const { t } = useTranslation();
  const { theme } = useStore();

  const handlePress = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Theme-specific image
  const alienImage = theme ? "alien.jpg" : "alienlight.jpg";
  const flash4DevsImage = theme
    ? "portadaF4D.jpg"
    : "https://i.gyazo.com/defc0d426305b4f9a5ff487458a84454.jpg";

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-5 auto-rows-fr gap-3 h-full">
        {/* DevTalles - Hero card (Winner 700€) - EXTRA LARGE */}
        <Card
          isPressable
          onPress={() => handlePress("https://frontend-code-quest2025-chi.vercel.app/")}
          isFooterBlurred
          className="col-span-5 sm:col-span-3 row-span-3 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 relative border border-gray-700"
        >
          <Image
            removeWrapper
            alt="DevTalles Hackathon Winner"
            className="z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src="/devtalles.png"
          />
          <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm z-20 shadow-lg">
            🏆 1st Place - 700€
          </div>
          <CardFooter className="absolute bg-black/70 backdrop-blur-md bottom-0 z-10 border-t-1 border-white/20 rounded-b-3xl">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <h1 className="text-white font-bold text-lg sm:text-xl mb-1">
                  {t("devtallesTitle")}
                </h1>
                <p className="text-xs sm:text-tiny text-white/70">
                  {t("devtallesDescription")}
                </p>
              </div>
            </div>
            <Button
              className="hidden sm:flex flex-row justify-center items-center gap-1"
              radius="full"
              size="sm"
            >
              <img src="/dotnet.svg" alt=".NET" width="30px" />
              <img src="/postgresql.svg" alt="PostgreSQL" width="30px" />
            </Button>
          </CardFooter>
        </Card>

        {/* You Are Not Alone - Vertical card right */}
        <Card
          isFooterBlurred
          isPressable
          onPress={() => handlePress("https://yana-front.vercel.app/")}
          className="col-span-5 sm:col-span-2 row-span-3 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-700"
        >
          <Image
            removeWrapper
            alt="You Are Not Alone background"
            className="z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src="youarenotalone.svg"
          />
          <CardFooter className="absolute bg-black/80 backdrop-blur-md bottom-0 z-10 border-t-1 border-white/20 rounded-b-3xl p-4">
            <div className="flex flex-col w-full gap-2">
              <h1 className="text-white font-bold text-base sm:text-lg">
                {t("youarenotalone")}
              </h1>
              <p className="text-xs text-white/70 line-clamp-3">
                {t("youarenotalonedesc")}
              </p>
              <div className="flex gap-2">
                <img src="/react.svg" alt="React" width="26px" />
                <img src="/TypeScript.svg" alt="TypeScript" width="26px" />
                <img src="/MaterialUI.svg" alt="Material UI" width="26px" />
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Flash4Devs - Medium card bottom left */}
        <Card
          isFooterBlurred
          className="col-span-3 sm:col-span-2 row-span-2 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-700"
        >
          <Image
            removeWrapper
            alt="Flash4Devs"
            className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src={flash4DevsImage}
          />
          <CardFooter className="absolute bg-black/80 backdrop-blur-md bottom-0 z-10 border-t-1 border-white/20 rounded-b-3xl p-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-white text-base sm:text-lg font-bold">Flash4Devs</p>
                <img src="/favicon1.png" alt="" className="w-[18px] h-[20px]" />
              </div>
              <div className="flex justify-between items-end">
                <p className="text-xs text-white/70 max-w-[60%]">
                  {t("flash4devsDescription")}
                </p>
                <div className="flex gap-2">
                  <img src="/react.svg" alt="React" width="24px" />
                  <img src="/TypeScript.svg" alt="TypeScript" width="24px" />
                  <img src="/tailwind.svg" alt="Tailwind" width="24px" />
                  <img src="/fastapi.svg" alt="FastAPI" width="24px" />
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Decorative card - small vertical */}
        <Card className="col-span-2 sm:col-span-1 row-span-1 rounded-3xl overflow-hidden group border border-gray-700">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src={alienImage}
          />
        </Card>

        {/* Decorative card - horizontal */}
        <Card className="col-span-3 sm:col-span-1 row-span-1 rounded-3xl overflow-hidden group border border-gray-700">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src={alienImage}
          />
        </Card>
        <Card className="col-span-3 sm:col-span-1 row-span-1 rounded-3xl overflow-hidden group border border-gray-700">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src={alienImage}
          />
        </Card>

        {/* Tandem - Wide horizontal card */}
        <Card
          isPressable
          onPress={() => handlePress("https://tandemsoftware.es")}
          className="col-span-5 sm:col-span-3 row-span-1 rounded-3xl overflow-hidden group bg-gray-100 hover:shadow-xl transition-all duration-300 relative border border-gray-400"
        >
          <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image
              removeWrapper
              alt="Tandem Software"
              className="w-[150%] h-auto object-contain"
              src="/Tandem_Banner.svg"
            />
          </div>
          <p className="absolute bottom-2 left-3 text-gray-700 text-xs font-semibold z-10">
            Actualmente trabajando en
          </p>
        </Card>
      </div>
    </div>
  );
}
