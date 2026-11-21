import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  ExternalLink,
  CheckCircle2,
  Building2,
  Award,
  TrendingUp,
} from "lucide-react";

const AboutAndStartup = () => {
  const cardMotion = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-20 bg-gradient-to-b from-[#030712] via-[#071326] to-[#030712] border-y border-white/10 relative overflow-hidden"
    >
      {/* Animated Floating Color Blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[-10%] w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-[-10%] w-72 h-72 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Flat Mobile Container (px-2 on mobile, px-10 on desktop) */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 relative z-10 space-y-6 sm:space-y-14">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardMotion}
          className="text-center max-w-3xl mx-auto px-2"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-black text-[11px] uppercase tracking-widest">
            Who I Am & What I Built
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Engineer, Analyst &{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Startup Founder.
            </span>
          </h2>
        </motion.div>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
          {/* Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardMotion}
            whileHover={{ y: -4 }}
            className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1629] to-[#050b14] border border-blue-500/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white">Education & Certifications</h3>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Master of Computer Applications (MCA)
                  </h4>
                  <span className="shrink-0 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-black">
                    8.07 CGPA
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Guru Kashi University, Bathinda, Punjab • 2025
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <h4 className="font-bold text-white text-sm sm:text-base">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-xs text-slate-400 mt-1">Computer Science & Software Engineering</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-cyan-400 shrink-0" />
                  <h4 className="font-bold text-white text-xs sm:text-sm">
                    Java Full Stack (6 Months) + Data Analytics
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Spring Boot, Spring Security, React.js, Python (NumPy, Pandas), MySQL, Excel & Power BI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardMotion}
            whileHover={{ y: -4 }}
            className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a1d1f] to-[#050b14] border border-emerald-500/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Briefcase size={22} />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white">Industry Experience</h3>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Founder & Lead Software Architect
                  </h4>
                  <span className="shrink-0 px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-black">
                    Present
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-bold mt-0.5">AodInfoSolution</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Architected and delivered 6+ full-scale production web portals & native mobile apps for schools,
                  hotels, and automotive businesses using Java Spring Boot, React, React Native, and Supabase.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Data Analyst (On-Campus Placement)
                  </h4>
                  <span className="shrink-0 px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-black">
                    July 2024
                  </span>
                </div>
                <p className="text-xs text-purple-400 font-bold mt-0.5">EbixCash Global Pvt Ltd</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Managed, cleaned, and analyzed large-scale retail & consumer goods datasets using SQL, Excel, Python,
                  and Power BI to drive actionable business reporting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STARTUP SPOTLIGHT: AODINFOSOLUTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardMotion}
          className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-10 bg-gradient-to-r from-[#08152b] via-[#131130] to-[#081c24] animate-gradient-bg border border-cyan-500/30 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[11px] font-black uppercase tracking-widest">
                <Building2 size={14} /> My Tech Startup
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                AodInfoSolution{" "}
                <span className="text-cyan-400 text-sm sm:text-xl font-bold block sm:inline">
                  (aodinfosolution.co.in)
                </span>
              </h3>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
                Founded <strong className="text-white">AodInfoSolution</strong> to deliver enterprise-grade ERPs,
                real-time hotel booking engines, native mobile apps, and AI automation for businesses and institutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "6+ Live Enterprise Websites & Paired Native Apps",
                  "5 Major Production Systems Shipped in 8 Months",
                  "Spring Boot, Supabase & React Architecture",
                  "End-to-End Ownership: DB Design to Cloud Launch",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 bg-[#030712]/70 p-4 sm:p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">6+ Live</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Ecosystems</p>
                </div>
                <TrendingUp size={28} className="text-emerald-400" />
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-cyan-400">100%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Web + App Sync</p>
                </div>
                <Rocket size={28} className="text-cyan-400" />
              </div>
              <a
                href="https://aodinfosolution.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                Visit Startup Website <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAndStartup;
