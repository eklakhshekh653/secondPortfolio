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
  return (
    <section id="about" className="py-20 bg-[#0a0f1c] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">
            Who I Am & What I Built
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Engineer, Analyst &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Startup Founder.
            </span>
          </h2>
        </div>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-[#030712] border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Education & Certifications</h3>
            </div>

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-black text-white text-base">Master of Computer Applications (MCA)</h4>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-black">
                    8.07 CGPA
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-semibold mt-1">
                  Guru Kashi University, Bathinda, Punjab • 2025
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-black text-white text-base">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-xs text-slate-400 font-semibold mt-1">Computer Science & Software Engineering</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-cyan-400 shrink-0" />
                  <h4 className="font-black text-white text-sm">
                    Java Full Stack Web Development (6 Months) + Data Analytics Curriculum
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Spring Boot, Spring Security, React.js, Python (NumPy, Pandas), MySQL, Excel & Power BI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#030712] border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Industry Experience</h3>
            </div>

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-black text-white text-base">Founder & Lead Software Architect</h4>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-400 text-[10px] font-black">
                    Present
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-bold mt-0.5">AodInfoSolution</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Architected and delivered 6+ full-scale production web portals & native mobile apps for schools,
                  hotels, and automotive businesses using Java Spring Boot, React, React Native, and Supabase.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-black text-white text-base">Data Analyst (On-Campus Placement)</h4>
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-400 text-[10px] font-black">
                    July 2024
                  </span>
                </div>
                <p className="text-xs text-purple-400 font-bold mt-0.5">EbixCash Global Pvt Ltd</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Managed, cleaned, and analyzed large-scale retail & consumer goods datasets using SQL, Excel, Python,
                  and Power BI to drive actionable business reporting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MASSIVE STARTUP SPOTLIGHT: AODINFOSOLUTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#050B14] via-[#0c1930] to-[#030712] border border-cyan-500/30 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest">
                <Building2 size={14} /> My Tech Startup
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                AodInfoSolution{" "}
                <span className="text-cyan-400 text-lg sm:text-2xl font-bold block sm:inline">
                  (aodinfosolution.co.in)
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                I founded <strong className="text-white">AodInfoSolution</strong> with a clear mission: to bring
                enterprise-grade software engineering—scalable ERPs, real-time booking engines, native mobile apps, and
                AI automation—to businesses and educational institutions in Tier-2 & Tier-3 cities at cost-effective
                architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "6+ Live Enterprise Websites & Paired Native Apps Delivered",
                  "5 Major Production Systems Shipped in Just 8 Months",
                  "Zero-Downtime Spring Boot, Supabase & React Architecture",
                  "Complete End-to-End Ownership: DB Design to Cloud Launch",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-semibold">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 bg-[#030712]/80 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-3xl font-black text-white">6+ Live</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Client Ecosystems</p>
                </div>
                <TrendingUp size={32} className="text-emerald-400" />
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-3xl font-black text-cyan-400">100%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Web + App Sync</p>
                </div>
                <Rocket size={32} className="text-cyan-400" />
              </div>
              <a
                href="https://aodinfosolution.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                Visit Startup Website <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAndStartup;
