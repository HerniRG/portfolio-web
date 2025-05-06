
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code, Palette, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: t("services.items.ios.title"),
      description: t("services.items.ios.description"),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: t("services.items.android.title"),
      description: t("services.items.android.description"),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: t("services.items.flutter.title"),
      description: t("services.items.flutter.description"),
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: t("services.items.design.title"),
      description: t("services.items.design.description"),
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent to-background opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">{t("services.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full glassmorphism rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white group-hover:text-white/90 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl overflow-hidden">
                  <div className={`h-full w-full bg-gradient-to-r ${service.gradient} animate-gradient-x`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
