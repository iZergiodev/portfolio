import { useStore } from "../store/store";

export default function IconPlaceholders() {
  const { theme } = useStore();


  // Theme-specific background image
  const backgroundImage = theme ? "/fondonegro.jpg" : "/nubes.jpg";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/linkedin.svg",
      url: "https://www.linkedin.com/in/izergiodev/",
      iconSize: "w-32 h-32",
    },
    {
      name: "GitHub",
      icon: "/github.svg",
      url: "https://github.com/iZergiodev",
      iconSize: "w-60 h-60",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-3xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden border-4 border-gray-600"
        >
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={social.icon}
            alt={social.name}
            className={`${social.iconSize} filter brightness-0 invert relative z-10`}
          />
        </a>
      ))}
    </div>
  );
}
