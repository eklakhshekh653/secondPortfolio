import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutAndStartup from "./components/AboutAndStartup";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#030712] text-white min-h-screen font-sans selection:bg-cyan-500/30 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <AboutAndStartup />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
