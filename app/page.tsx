"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu 
} from "lucide-react";
import Link from "next/link";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isClickedRecently, setIsClickedRecently] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only update active section based on scroll if not recently clicked
      if (isClickedRecently) return;

      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at the bottom of page (for contact section)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClickedRecently]);

  const handleNavClick = (sectionName: string) => {
    setActiveSection(sectionName);
    setIsClickedRecently(true);
    
    // Re-enable scroll detection after 1.5 seconds
    setTimeout(() => {
      setIsClickedRecently(false);
    }, 1500);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter">
          MornMoniroit<span className="text-blue-500">Portfolio</span>.
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`relative transition-colors ${
                activeSection === item.toLowerCase()
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          onClick={() => handleNavClick("contact")}
          className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          Let's Talk
        </Link>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-blue-400 mb-6">
            Available for hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Building digital <br /> experiences that matter.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
             I'm a Software Engineering specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible, human-centered products at <span className="text-white">TechCorp</span>.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105"
            >
              View Work
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Github size={20} /> GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-black/40 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 text-lg mb-2">Hello, I'm Morn Moniroit,</p>
          <h2 className="text-6xl md:text-8xl font-black leading-none mb-6">
            <span className="text-blue-500 italic block">S<i>o</i>ftware</span>
            <span className="text-blue-500">Engineer</span>
          </h2>
          <p className="text-gray-400 text-xl mb-8">based in Cambodia. <span className="text-gray-600">xl</span></p>
          
          <div className="relative inline-block group">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/30 group-hover:border-yellow-400 transition-colors"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/30 group-hover:border-yellow-400 transition-colors"></div>
            <a href="cv.pdf" target="_blank">
              <button className="bg-[#e9e68e] text-black px-10 py-3 font-bold text-lg rounded-sm hover:brightness-110 transition-all">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute top-0 right-10 text-yellow-200 opacity-80">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>
          </div>
          
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 border border-yellow-200/20">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-800 relative bg-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="absolute -bottom-4 left-0 text-yellow-200 font-bold text-2xl italic tracking-tighter opacity-70">
              /////
            </div>
            <div className="absolute -bottom-10 right-10 text-yellow-200 font-bold text-2xl italic tracking-tighter opacity-70 rotate-12">
              ////
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Academate",
      desc: "This project is about the process of manage data, information, attendent, score in every term or year of student in Educational center or school. This project had 4 mains actors, Admin, Admin Asistance, Teacher, and Student.",
      tags: ["React.js", "Spring Boot", "MySQL"],
      link: "#",
    },
    {
      title: "TradeWise",
      desc: "This project is likely E-commerce platform but it is different from other e-commerce platform because our platform allows users (buyers) to do post the product that they want to our platform, then it will post to related to the Shop or store that cooperate with our platform, then they  will post or reply back to customers about their products, and price. Moreover, shop and buyers can communicate to each other also. We have 2 main actors such as, Buyers, Shops or Stores.",
      tags: ["Angular", "Spring Boot Microservices", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Leave Management System(LMS)",
      desc: "A web application for managing employee leave requests and approvals.",
      tags: ["Spring Boot", "Next.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Voice of Customer(VoC)",
      desc: "A web/mobile application for managing customer feedback and reviews.",
      tags: ["Servlet", "jQuery", "MySQL"],
      link: "#",
    }, 
    {
      title: "Student Research Institute Site",
      desc: "A web application for managing student research projects, publications and Financial records.",
      tags: ["JexFramework", "IBSheet", "MySQL"],
      link: "#",
    }

    
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-gray-400">A collection of projects I've built recently.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="mb-4 flex justify-between items-start">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Code2 size={24} />
                </div>
                <Link
                  href={project.link}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </Link>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Frontend", icon: <Code2 />, items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Angular", "Jquery", "JexFramework"] },
    { name: "Backend", icon: <Terminal />, items: ["Java", "Springboot", "PostgreSQL", "Servlet", "SQL", "MongoDB"] },
    { name: "DevOps", icon: <Cpu />, items: ["AWS", "CI/CD", "Git"] },
  ];

  return (
    <section id="skills" className="py-24 border-y border-white/5 bg-zinc-900/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400">The technologies I use to build products.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-white/5 rounded-xl p-8 text-center hover:border-blue-500/30 transition-colors"
            >
              <div className="inline-flex p-4 rounded-full bg-white/5 text-blue-400 mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.name}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
          <p className="text-gray-400 mb-10 text-lg">
            I'm currently available for new projects. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} /> moniroitmorn@gmail.com
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </Link>
          </div>

          <Link
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
          >
            Say Hello
          </Link>
        </div>
      </div>
      
      {/* Footer Copyright */}
      <div className="absolute bottom-6 w-full text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} DevPortfolio. All rights reserved.
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}