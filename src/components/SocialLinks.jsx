import { motion } from "framer-motion";

export default function SocialLinks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(0, 206, 209, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const socialLinks = [
    {
      src: "/linkedin.svg",
      alt: "LinkedIn",
      size: "w-[26px]",
      link: "https://www.linkedin.com/in/izergiodev/",
    },
    {
      src: "/github.svg",
      alt: "GitHub",
      size: "w-[55px]",
      link: "https://github.com/iZergiodev",
    },
  ];

  return (
    <motion.div
      className="flex gap-6 justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[55px] h-[55px] bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.img
            src={social.src}
            alt={social.alt}
            className={social.size}
            whileHover={{ rotate: 10 }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
}
