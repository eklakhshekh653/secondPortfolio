import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Download, Rocket, MapPin, Briefcase, Code2, BarChart3, Sparkles } from "lucide-react";
import pdf from "./EklakhMcaRes.pdf";
import ak from "./data/my-img.json";

const Home = ({ setActiveTab }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Java Full Stack Architect",
        "Spring Boot & Supabase Engineer",
        "Data Analyst (Python, SQL, Power BI)",
        "Founder of AodInfoSolution",
      ],
      typeSpeed: 45,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  const stats = [
    { label: "Live Production Apps", value: "10+", icon: <Rocket size={18} className="text-cyan-400" />, border: "border-cyan-500/20" },
    { label: "Enterprise ERPs", value: "5+", icon: <Briefcase size={18} className="text-emerald-400" />, border: "border-emerald-500/20" },
    { label: "MCA CGPA", value: "8.07", icon: <Sparkles size={18} className="text-amber-400" />, border: "border-amber-500/20" },
    { label: "Tech & Data Stack", value: "20+", icon: <BarChart3 size={18} className="text-purple-400" />, border: "border-purple-500/20" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-gradient-to-br from-[#030712] via-[#091229] to-[#120824] animate-gradient-bg"
    >
      {/* Animated Floating Color Blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-15%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/15 blur-[110px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-15%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-fuchsia-600/15 blur-[110px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left px-1 sm:px-0"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-black uppercase tracking-widest mb-5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Open for Software & Data Roles • Dubai, UAE
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-3"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
                Shekh Eklakh
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-cyan-200 mb-5 min-h-[36px]"
            >
              <span ref={typedRef} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7 font-medium"
            >
              MCA Graduate (8.07 CGPA) & Founder of{" "}
              <a
                href="https://aodinfosolution.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-bold hover:underline"
              >
                AodInfoSolution
              </a>
              . I architect high-concurrency <strong className="text-white">Java Spring Boot</strong> &{" "}
              <strong className="text-white">Supabase</strong> backends, build{" "}
              <strong className="text-white">React / React Native</strong> ecosystems, and turn raw data into decisions using{" "}
              <strong className="text-white">Python, SQL, Excel & Power BI</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={pdf}
                download="EklakhMcaRes.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-cyan-500/25"
              >
                <Download size={17} /> Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab && setActiveTab("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <Code2 size={17} className="text-cyan-400" /> Explore 16+ Projects
              </motion.button>
            </motion.div>

            {/* Quick Stats Bar */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-3 sm:p-3.5 rounded-2xl bg-[#0a0f1c]/90 border ${stat.border} text-left flex flex-col gap-1 shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-black text-white">{stat.value}</span>
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 flex justify-center mt-4 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-fuchsia-600 blur-xl opacity-60 animate-pulse" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-500 shadow-2xl"
              >
                <img
                  src={`/assets/${ak.imgSrc}`}
                  alt="Shekh Eklakh"
                  className="w-full h-full object-cover object-top rounded-full border-4 border-[#030712]"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full bg-[#0a0f1c]/95 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] sm:text-xs font-black text-white"
              >
                <MapPin size={14} className="text-cyan-400" /> Dubai, UAE • Open to Relocation
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
