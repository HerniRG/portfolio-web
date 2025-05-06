
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <ParticlesBackground />
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl relative z-10"
      >
        <div className="mb-8 flex justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient-x blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/316cc0405821db82f5c54565b0725fd8.png"
              alt="Hernán Rodríguez"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 relative z-10"
            />
          </motion.div>
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hernán Rodríguez
          <div className="gradient-text block mt-2 text-2xl md:text-4xl whitespace-nowrap overflow-hidden">
            <TypeAnimation
              sequence={[
                'iOS Developer',
                2000,
                'Android Developer',
                2000,
                'Flutter Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 animate-gradient-x"
          >
            {t("hero.cta.contact")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="border-white/20 hover:border-white/40 backdrop-blur-sm"
          >
            {t("hero.cta.projects")}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 z-10"
      >
        <ArrowDown className="animate-bounce w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
