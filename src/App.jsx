
import React, { Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-background text-foreground"
        >
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <main>
              <section id="home">
                <Hero />
              </section>
              <Suspense fallback={<LoadingSpinner />}>
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="contact">
                  <Contact />
                </section>
                <Footer />
              </Suspense>
            </main>
            <ScrollToTop />
            <Toaster />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
