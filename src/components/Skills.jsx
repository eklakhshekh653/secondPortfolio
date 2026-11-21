import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, BarChart3, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      icon: <Server size={22} className="text-emerald-400" />,
      color: "from-emerald-400 to-teal-500",
      cardBg: "from-[#071f1a] to-[#050b14]",
      border: "border-emerald-500/25 hover:border-emerald-400/60",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot & Spring Security", level: 88 },
        { name: "Spring Data JPA & Microservices", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Supabase (Auth, DB, Realtime)", level: 88 },
      ],
    },
    {
      title: "Frontend & Mobile Apps",
      icon: <Layout size={22} className="text-cyan-400" />,
      color: "from-cyan-400 to-blue-500",
      cardBg: "from-[#081a2e] to-[#050b14]",
      border: "border-cyan-500/25 hover:border-cyan-400/60",
      skills: [
        { name: "React.js", level: 90 },
        { name: "React Native (Expo)", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
      ],
    },
    {
      title: "Data Analytics & BI",
      icon: <BarChart3 size={22} className="text-amber-400" />,
      color: "from-amber-400 to-orange-500",
      cardBg: "from-[#211508] to-[#050b14]",
      border: "border-amber-500/25 hover:border-amber-400/60",
      skills: [
        { name: "Python (Data Analysis)", level: 85 },
        { name: "NumPy & Pandas", level: 85 },
        { name: "Power BI Dashboards", level: 88 },
        { name: "Microsoft Excel (Pivot, Formulas)", level: 92 },
        { name: "SQL & Data Cleaning", level: 88 },
      ],
    },
    {
      title: "Databases, Cloud & Tools",
      icon: <Database size={22} className="text-fuchsia-400" />,
      color: "from-fuchsia-400 to-purple-500",
      cardBg: "from-[#1c0c2b] to-[#050b14]",
      border: "border-fuchsia-500/25 hover:border-fuchsia-400/60",
      skills: [
        { name: "MySQL & PostgreSQL", level: 88 },
        { name: "Redis Cache", level: 78 },
        { name: "Docker & Deployment (Vercel)", level: 82 },
        { name: "Git & GitHub", level: 90 },
        { name: "Cloudinary & Mapbox API", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-20 bg-gradient-to-b from-[#030712] via-[#0d0a1f] to-[#030712] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 px-2"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-black text-[11px] uppercase tracking-widest">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Full Stack Engineering +{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 bg-clip-text text-transparent">
              Data Analytics.
            </span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2 font-medium">
            Enterprise software development combined with business intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${cat.cardBg} border ${cat.border} transition-all shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">{cat.icon}</div>
                <h3 className="text-lg sm:text-xl font-black text-white">{cat.title}</h3>
              </div>

              <div className="space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.08 * sIdx, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
