
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = t("projects.items");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projectImages = [
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/874d5e219eb55af0621c905b307b7203.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/63dede134ef7a02b0d2d3839b24c1721.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/06e87937d05cf0a7d436f3106af898cd.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/0c550d04561447c3336236e16e299783.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/b178a9aab7fd12dc69fa40c33b542f0d.jpg",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7e1a550c-c4cc-417f-8421-20dc35defcae/66002c002cfc71ca8e5344fb07a30157.png"
  ];

  const projectLinks = [
    {
      appStore: "https://apps.apple.com/es/app/devcollab/id6743031695",
      playStore: null
    },
    {
      appStore: "https://apps.apple.com/es/app/tu-gasolinera/id6740055324",
      playStore: null
    },
    {
      appStore: "https://apps.apple.com/es/app/tus-fiestas-app/id1663898205",
      playStore: "https://play.google.com/store/apps/details?id=app.tus.fiestas"
    },
    {
      appStore: "https://apps.apple.com/us/app/tu-lista-app/id6447888002",
      playStore: "https://play.google.com/store/apps/details?id=app.tu.lista"
    },
    {
      appStore: "https://apps.apple.com/us/app/questioner/id6448804184",
      playStore: "https://play.google.com/store/apps/details?id=app.tu.questioner"
    },
    {
      appStore: "https://apps.apple.com/us/app/fashion-meteo/id6455540997",
      playStore: "https://play.google.com/store/apps/details?id=app.fashion.meteo"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-4 gradient-text">{t("projects.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group"
            >
              <div className="glassmorphism rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  {/* Animated border */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {projectLinks[index].appStore && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 flex items-center gap-2"
                        asChild
                      >
                        <a href={projectLinks[index].appStore} target="_blank" rel="noopener noreferrer">
                          <ShoppingBag className="w-4 h-4" />
                          {t("projects.viewOnAppStore")}
                        </a>
                      </Button>
                    )}
                    {projectLinks[index].playStore && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2"
                        asChild
                      >
                        <a href={projectLinks[index].playStore} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {t("projects.viewOnPlayStore")}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
