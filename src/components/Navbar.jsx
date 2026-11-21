import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download, Home as HomeIcon, User, Cpu, FolderKanban, Mail } from "lucide-react";
import pdf from "./EklakhMcaRes.pdf";

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", name: "Home", icon: <HomeIcon size={18} /> },
    { id: "about", name: "About", icon: <User size={18} /> },
    { id: "skills", name: "Skills", icon: <Cpu size={18} /> },
    { id: "projects", name: "Projects", icon: <FolderKanban size={18} /> },
    { id: "contact", name: "Contact", icon: <Mail size={18} /> },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* TOP HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-[#030712]/70 backdrop-blur-md py-3.5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center gap-2.5 group text-left">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
            >
              <Terminal size={20} />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-white tracking-tight leading-none">
                SHEKH <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">EKLAKH</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                Architect & Analyst
              </span>
            </div>
          </button>

          {/* Desktop Navigation with Animated Active Pill */}
          <nav className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href={pdf}
              download="EklakhMcaRes.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050B14]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-3 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition ${
                      activeTab === link.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {link.icon} {link.name}
                  </button>
                ))}
                <a
                  href={pdf}
                  download="EklakhMcaRes.pdf"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs uppercase tracking-widest"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* NATIVE ANDROID-STYLE BOTTOM NAVIGATION BAR (MOBILE ONLY) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-[#050B14]/95 backdrop-blur-xl border-t border-white/10 px-1 py-2 flex justify-around items-center shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
        {navLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive ? "text-cyan-400" : "text-slate-500"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileBottomPill"
                  className="absolute inset-0 bg-cyan-500/10 rounded-xl border border-cyan-500/20"
                />
              )}
              <span className="relative z-10">{link.icon}</span>
              <span className="relative z-10 text-[10px] font-bold mt-1">{link.name}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
