
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/hernán-rodríguez-garnica/",
      label: "LinkedIn",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/herniRG",
      label: "GitHub",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hernanrg85@gmail.com",
      label: "Email",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "services", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      
      setTimeout(() => {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300);
    }
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "services", label: t("nav.services") },
    { id: "contact", label: t("nav.contact") }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Social Links and Language Switch */}
        <div className="flex items-center gap-4">
          <LanguageSwitch />
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={link.label}
              >
                <div className={`bg-gradient-to-r ${link.gradient} bg-clip-text`}>
                  <div className={`p-1 rounded-lg bg-gradient-to-r ${link.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative px-2 py-1 text-base transition-colors ${
                    activeSection === id 
                      ? "text-white font-medium" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-gray-800"
          >
            <ul className="px-4 py-4 space-y-2">
              {navItems.map(({ id, label }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === id
                        ? "text-white bg-gray-800/50"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
