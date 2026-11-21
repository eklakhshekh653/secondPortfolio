import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shekh-eklakh-520105198/",
      icon: <CiLinkedin size={28} />,
      color: "hover:border-blue-500 hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/eklakhshekh653",
      icon: <FaGithubSquare size={26} />,
      color: "hover:border-slate-300 hover:text-white",
    },
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=eklakhshekh653@gmail.com&su=Hiring%20Inquiry&body=Hello%20Shekh%20Eklakh,",
      icon: <SiGmail size={24} />,
      color: "hover:border-rose-500 hover:text-rose-400",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/ShekhEklakh",
      icon: <FaSquareXTwitter size={24} />,
      color: "hover:border-cyan-400 hover:text-cyan-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akhlaque_bth/",
      icon: <FaInstagram size={24} />,
      color: "hover:border-pink-500 hover:text-pink-400",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/shekh.eklakh.7",
      icon: <CiFacebook size={28} />,
      color: "hover:border-blue-400 hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#030712] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0a0f1c] to-[#050B14] border border-cyan-500/20 shadow-2xl"
        >
          <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">
            Let's Work Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
            Hire Me for Your Next Big Role.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 font-medium">
            Actively seeking <strong className="text-white">Java Full Stack Developer</strong>,{" "}
            <strong className="text-white">Software Engineer</strong>, or{" "}
            <strong className="text-white">Data Analyst</strong> opportunities in Dubai & globally.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs sm:text-sm font-bold text-slate-300">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <Mail size={16} className="text-cyan-400" /> eklakhshekh653@gmail.com
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <MapPin size={16} className="text-emerald-400" /> Dubai, UAE
            </span>
          </div>

          {/* Social Grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className={`w-14 h-14 rounded-2xl bg-[#030712] border border-white/10 text-slate-300 flex items-center justify-center transition-all hover:scale-110 shadow-lg ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <a
            href="https://aodinfosolution.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-cyan-300"
          >
            Founder of AodInfoSolution <ExternalLink size={14} />
          </a>
        </motion.div>

        <p className="text-xs text-slate-500 font-semibold mt-10">
          © {new Date().getFullYear()} Shekh Eklakh. Engineered with React, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </section>
  );
};

export default Contact;
