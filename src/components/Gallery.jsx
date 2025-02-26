import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@heroui/react";

export default function Gallery() {
  const handlePress = () => {
    window.open("https://front-flash4-devs.vercel.app/", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-4.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Plant a tree
          </p>
          <h4 className="text-white font-medium text-large">
            Contribute to the planet
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Supercharged
          </p>
          <h4 className="text-white font-medium text-large">
            Creates beauty like a beast
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-2.jpeg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://heroui.com/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isPressable
        onPress={handlePress}
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 hover:cursor-pointer"
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
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col p-2">
              <p className=" text-white font-bold text text-xl">Flash4Devs</p>
              <p className="text-tiny text-white/60">A new way to learn</p>
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
