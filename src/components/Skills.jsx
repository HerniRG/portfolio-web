
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Smartphone, 
  Code, 
  Brain,
  Database,
  GitBranch,
  Terminal
} from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.categories.ios.title"),
      icon: <Smartphone className="w-6 h-6" />,
      skills: t("skills.categories.ios.skills"),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: t("skills.categories.android.title"),
      icon: <Code className="w-6 h-6" />,
      skills: t("skills.categories.android.skills"),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: t("skills.categories.flutter.title"),
      icon: <Terminal className="w-6 h-6" />,
      skills: t("skills.categories.flutter.skills"),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: t("skills.categories.architecture.title"),
      icon: <Brain className="w-6 h-6" />,
      skills: t("skills.categories.architecture.skills"),
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: t("skills.categories.backend.title"),
      icon: <Database className="w-6 h-6" />,
      skills: t("skills.categories.backend.skills"),
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: t("skills.categories.management.title"),
      icon: <GitBranch className="w-6 h-6" />,
      skills: t("skills.categories.management.skills"),
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-4 gradient-text">{t("skills.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glassmorphism rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-white transition-colors duration-300"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
