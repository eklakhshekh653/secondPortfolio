import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, PlayCircle, X, Layers, Globe } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [videoUrl, setVideoUrl] = useState(null);

  const categories = ["All", "AodInfoSolution Live", "Client Web Apps", "Full Stack & GitHub"];

  const allProjects = [
    {
      id: 1,
      title: "AodInfoSolution Agency Portal",
      category: "AodInfoSolution Live",
      description: "My tech startup's official platform showcasing enterprise web, mobile app, and AI biometric services.",
      imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "SEO"],
      liveUrl: "https://aodinfosolution.co.in",
    },
    {
      id: 2,
      title: "St. Stephen's Academy ERP & App",
      category: "AodInfoSolution Live",
      description: "Full-stack School ERP managing academic administration, fee processing, and result generation with native mobile app.",
      imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      tags: ["Java", "Spring Boot", "React", "SQL"],
      liveUrl: "https://ststephensbettiah.com",
    },
    {
      id: 3,
      title: "Hotel Kashi Nagri Booking Engine",
      category: "AodInfoSolution Live",
      description: "Direct hotel room booking platform with Admin/Staff/Guest ERP dashboard, Cloudinary images & Supabase backend.",
      imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      tags: ["React.js", "Supabase", "Tailwind CSS", "ERP"],
      liveUrl: "https://www.hotelkashinagri.in",
    },
    {
      id: 4,
      title: "Care Public School ERP & App",
      category: "AodInfoSolution Live",
      description: "Centralized School ERP for fee tracking, attendance, and academic record updates paired with mobile app.",
      imageSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      tags: ["Spring Boot", "Spring Data JPA", "React", "MySQL"],
      liveUrl: "https://www.carepublicschool.co.in",
    },
    {
      id: 5,
      title: "Jawahar Vidya Niketan Portal",
      category: "AodInfoSolution Live",
      description: "Cross-platform school management portal and parent communication ecosystem.",
      imageSrc: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      tags: ["Java", "React Native", "Tailwind CSS", "SQL"],
      liveUrl: "https://jawaharvidyaniketan.co.in",
    },
    {
      id: 6,
      title: "Delight Public High School",
      category: "AodInfoSolution Live",
      description: "High-performance SEO-optimized school web portal synchronized with student management system.",
      imageSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
      tags: ["React.js", "Java", "SEO", "Mobile App"],
      liveUrl: "https://delightpublichighschool.co.in",
    },
    {
      id: 7,
      title: "Luxury Car Noida",
      category: "AodInfoSolution Live",
      description: "Premium luxury car rental booking platform and fleet showcase built for high-ticket clients.",
      imageSrc: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
      tags: ["React", "React Native", "Node.js", "MongoDB"],
      liveUrl: "https://luxurycarnoida.com",
    },
    {
      id: 8,
      title: "Raj Interiors — Design & Guides",
      category: "Client Web Apps",
      description: "Modern interior design showcase & home interior guides platform with sleek responsive UI.",
      imageSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      tags: ["React.js", "Tailwind CSS", "Vercel", "UI/UX"],
      liveUrl: "https://raj-interiors.vercel.app/guides/home-interior-design-ideas",
    },
    {
      id: 9,
      title: "Welding & Fabrication Solutions",
      category: "Client Web Apps",
      description: "Industrial welding & metal fabrication business website with service showcase and lead capture.",
      imageSrc: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
      tags: ["React.js", "Tailwind CSS", "Responsive", "Vercel"],
      liveUrl: "https://welding-three.vercel.app/",
    },
    {
      id: 10,
      title: "Enterprise Solution Web App",
      category: "Client Web Apps",
      description: "Modern corporate & digital solutions web application engineered for fast load speeds.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://solution-bp8y.vercel.app/",
    },
    {
      id: 11,
      title: "Ecommerce Application",
      category: "Full Stack & GitHub",
      description: "Complete full-stack E-Commerce platform built with Java Spring Boot backend and React.js frontend.",
      imageSrc: "https://i.ytimg.com/vi/RLTbMG8pZ9c/hqdefault.jpg",
      tags: ["Spring Boot", "React.js", "MySQL", "REST API"],
      demoVideo: "https://res.cloudinary.com/djjm233nn/video/upload/v1741177036/j95ajdldx8wl4pqvx4ic.mp4",
      source: "https://github.com/eklakhshekh653/EcommerceProject",
    },
    {
      id: 12,
      title: "Spring Boot Quiz App",
      category: "Full Stack & GitHub",
      description: "Interactive quiz and assessment application powered by Spring Boot APIs and React.js.",
      imageSrc: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80",
      tags: ["Spring Boot", "React.js", "Java"],
      demoVideo: "https://res.cloudinary.com/djjm233nn/video/upload/v1744529704/xheqdfsr3omsuvd8wdok.mp4",
      source: "https://github.com/eklakhshekh653/quiz-tests",
    },
    {
      id: 13,
      title: "Hostel Management System",
      category: "Full Stack & GitHub",
      description: "Complete hostel room allocation, student records, and management system in Spring Boot & React.",
      imageSrc: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
      tags: ["Spring Boot", "React.js", "SQL"],
      demoVideo: "https://res.cloudinary.com/djjm233nn/video/upload/v1744529930/juisnm1xqv0nncqq9qkn.mp4",
      source: "https://github.com/eklakhshekh653/HostelManagementBackend",
    },
    {
      id: 14,
      title: "Video Streaming App",
      category: "Full Stack & GitHub",
      description: "Dynamic video streaming web application built with React.js integrating real-time online APIs.",
      imageSrc: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
      tags: ["React.js", "REST API", "Vercel"],
      liveUrl: "https://video-streaming-three.vercel.app/",
      source: "https://github.com/eklakhshekh653/Video-Streaming",
    },
    {
      id: 15,
      title: "Real Time Social Media App",
      category: "Full Stack & GitHub",
      description: "Full-stack social media platform with posts, interactions, and Spring Boot backend.",
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      tags: ["Spring Boot", "React.js", "MySQL"],
      demoVideo: "https://res.cloudinary.com/djjm233nn/video/upload/v1744532293/mzfujfeq0ayu2iutm1ww.mp4",
      source: "https://github.com/eklakhshekh653/Social-media",
    },
    {
      id: 16,
      title: "Online Streaming Real Time OTT",
      category: "Full Stack & GitHub",
      description: "OTT media streaming application built with React.js frontend and Spring Boot backend.",
      imageSrc: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80",
      tags: ["Spring Boot", "React.js", "Streaming"],
      demoVideo: "https://res.cloudinary.com/djjm233nn/video/upload/v1744531965/u7edi9ngkbus7ctt0kn7.mp4",
      source: "https://github.com/eklakhshekh653/Ott",
    },
  ];

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-12 sm:py-20 bg-gradient-to-b from-[#030712] via-[#09152b] to-[#030712] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 px-2"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black text-[11px] uppercase tracking-widest">
            <Layers size={13} /> Proof of Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            16+ Production &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Full Stack Projects.
            </span>
          </h2>
        </motion.div>

        {/* Horizontal Scrollable Filter Chips on Mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 pb-3 mb-6 sm:mb-10 px-1 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-widest transition-all border shrink-0 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col bg-gradient-to-b from-[#0d1629] to-[#050b14] border border-white/10 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-xl transition-all"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden border-b border-white/10">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-cyan-400 text-[10px] font-black uppercase tracking-wider border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-black text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-auto">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:opacity-90 transition"
                      >
                        <Globe size={14} /> Live Site
                      </a>
                    )}

                    {item.demoVideo && (
                      <button
                        onClick={() => setVideoUrl(item.demoVideo)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:opacity-90 transition"
                      >
                        <PlayCircle size={14} /> Watch Demo
                      </button>
                    )}

                    {item.source && (
                      <a
                        href={item.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Demo Modal */}
      <AnimatePresence>
        {videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3"
          >
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute top-4 right-4 z-[10000] p-3 rounded-full bg-rose-600 text-white hover:bg-rose-500 shadow-2xl transition"
            >
              <X size={22} />
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full max-w-4xl max-h-[80vh] rounded-2xl border border-white/20 shadow-2xl bg-black"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
