
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, GraduationCap, Languages, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent to-background opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-6">
          {/* About Me Section - Full Width */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">{t("about.title")}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("about.description")}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Languages className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold">{t("about.languages.title")}</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              {t("about.languages.content")}
            </p>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex justify-center"
            >
              <Button 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 animate-gradient-x flex items-center gap-2" 
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1mSzXsPAbAGNPmRE7Lp40iBTcEpxTjOQX/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  {t("about.downloadCV")}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Education and Certifications Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Section */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold">{t("about.education.title")}</h3>
              </div>
              <div className="space-y-4">
                {t("about.education.items").map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5"
                  >
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-blue-300">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold">{t("about.certifications.title")}</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {t("about.certifications.items").map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5"
                  >
                    <p className="text-white">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
