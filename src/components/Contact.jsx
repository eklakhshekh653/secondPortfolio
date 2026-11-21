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
      icon: <CiLinkedin size={26} />,
      color: "hover:border-blue-500 hover:text-blue-400 hover:shadow-blue-500/25",
    },
    {
      name: "GitHub",
      url: "https://github.com/eklakhshekh653",
      icon: <FaGithubSquare size={24} />,
      color: "hover:border-slate-300 hover:text-white hover:shadow-white/20",
    },
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=eklakhshekh653@gmail.com&su=Hiring%20Inquiry&body=Hello%20Shekh%20Eklakh,",
      icon: <SiGmail size={22} />,
      color: "hover:border-rose-500 hover:text-rose-400 hover:shadow-rose-500/25",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/ShekhEklakh",
      icon: <FaSquareXTwitter size={22} />,
      color: "hover:border-cyan-400 hover:text-cyan-400 hover:shadow-cyan-400/25",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akhlaque_bth/",
      icon: <FaInstagram size={22} />,
      color: "hover:border-pink-500 hover:text-pink-400 hover:shadow-pink-500/25",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/shekh.eklakh.7",
      icon: <CiFacebook size={26} />,
      color: "hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/25",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-gradient-to-b from-[#030712] via-[#120924] to-[#030712] border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 sm:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0e172a] via-[#170f2e] to-[#081b26] animate-gradient-bg border border-fuchsia-500/25 shadow-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-300 font-black text-[11px] uppercase tracking-widest">
            Let's Work Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-3 tracking-tight">
            Hire Me for Your Next Big Role.
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto mb-6 font-medium">
            Actively seeking <strong className="text-white">Java Full Stack Developer</strong>,{" "}
            <strong className="text-white">Software Engineer</strong>, or{" "}
            <strong className="text-white">Data Analyst</strong> opportunities in Dubai & globally.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-8 text-xs sm:text-sm font-bold text-slate-200">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
              <Mail size={15} className="text-cyan-400" /> eklakhshekh653@gmail.com
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
              <MapPin size={15} className="text-emerald-400" /> Dubai, UAE
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {socials.map((item, idx) => (
              <motion.a
                key={idx}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#030712]/90 border border-white/15 text-slate-300 flex items-center justify-center transition-all shadow-lg ${item.color}`}
              >
                {item.icon}
              </motion.a>
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

        <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-8">
          © {new Date().getFullYear()} Shekh Eklakh. Engineered with React, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </section>
  );
};

export default Contact;
