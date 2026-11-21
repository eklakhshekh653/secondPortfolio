import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, BarChart3, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      icon: <Server size={24} className="text-emerald-400" />,
      color: "from-emerald-500 to-teal-500",
      border: "hover:border-emerald-500/40",
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
      icon: <Layout size={24} className="text-cyan-400" />,
      color: "from-cyan-500 to-blue-500",
      border: "hover:border-cyan-500/40",
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
      icon: <BarChart3 size={24} className="text-amber-400" />,
      color: "from-amber-500 to-orange-500",
      border: "hover:border-amber-500/40",
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
      icon: <Database size={24} className="text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      border: "hover:border-purple-500/40",
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
    <section id="skills" className="py-20 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Full Stack Engineering +{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Data Analytics.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-medium">
            A rare hybrid skillset combining enterprise software development with business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl bg-[#0a0f1c] border border-white/10 transition-colors shadow-xl ${cat.border}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">{cat.icon}</div>
                <h3 className="text-xl font-black text-white">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * sIdx }}
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
