import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutAndStartup from "./components/AboutAndStartup";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Jab bhi tab change ho, page top par scroll ho jaye
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, scale: 0.99, transition: { duration: 0.25 } },
  };

  return (
    <div className="bg-[#030712] text-white min-h-screen selection:bg-cyan-500/30 selection:text-white pb-20 md:pb-0 overflow-x-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home setActiveTab={setActiveTab} />
              <AboutAndStartup />
              <Skills />
              <Projects />
              <Contact />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
              <AboutAndStartup />
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div key="skills" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
              <Skills />
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
              <Projects />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
