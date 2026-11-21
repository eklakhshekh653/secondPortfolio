import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Download, Rocket, MapPin, Briefcase, Code2, BarChart3, Sparkles } from "lucide-react";
import pdf from "./EklakhMcaRes.pdf";
import ak from "./data/my-img.json";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Java Full Stack Architect",
        "Spring Boot & React Engineer",
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
    { label: "Live Production Apps", value: "10+", icon: <Rocket size={18} className="text-cyan-400" /> },
    { label: "Enterprise ERPs Built", value: "5+", icon: <Briefcase size={18} className="text-emerald-400" /> },
    { label: "MCA CGPA", value: "8.07", icon: <Sparkles size={18} className="text-amber-400" /> },
    { label: "Tech & Data Stack", value: "20+", icon: <BarChart3 size={18} className="text-purple-400" /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#030712]"
    >
      {/* Glowing Background Orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Software & Data Roles • Dubai, UAE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Shekh Eklakh
              </span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-200 mb-6 min-h-[40px]">
              <span ref={typedRef} />
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-medium">
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
              <strong className="text-white">React / React Native</strong> ecosystems, and transform raw business data into insights using{" "}
              <strong className="text-white">Python, SQL, Excel & Power BI</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={pdf}
                download="EklakhMcaRes.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <Code2 size={18} className="text-cyan-400" /> Explore 16+ Projects
              </a>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#0a0f1c] border border-white/10 text-left flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-black text-white">{stat.value}</span>
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 blur-lg opacity-60 animate-pulse" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl"
              >
                <img
                  src={`/assets/${ak.imgSrc}`}
                  alt="Shekh Eklakh"
                  className="w-full h-full object-cover object-top rounded-full border-4 border-[#030712]"
                />
              </motion.div>

              {/* Floating Location Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full bg-[#0a0f1c]/95 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-black text-white">
                <MapPin size={14} className="text-cyan-400" /> Dubai, UAE • Open to Relocation
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
