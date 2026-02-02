import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import profile from "../assets/jeswin.jpeg"
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
const roles = [
  "Full Stack Developer",
  "Backend Specialist",
  "MERN Stack Developer",
  "React Native Developer",
  "Mobile App Innovator",
  "Creative Coder",
  "Frontend Enthusiast",
  "React/Next.js Developer",
  "Web App Innovator",
  "UI/UX Focused Developer",
  "Node.js Engineer",
  "JavaScript Wizard",
  "Performance Optimizer",
  "Tech Problem Solver"
];


  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentRoleText = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length === currentRoleText.length) {
        // Wait before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        // Move to next role after deleting
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        // Typing or deleting
        setDisplayText(isDeleting 
          ? currentRoleText.substring(0, displayText.length - 1)
          : currentRoleText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentRole, isDeleting]);

  return (
   // components/Hero.jsx (Updated Snippet)
<section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4">
  {/* Background Gradient Orbs */}
  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
  <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

  <div className="container mx-auto text-center z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
      <img 
        src={profile} 
        alt="Jeswin Joseph" 
        className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
      />
    </motion.div>

    <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
      Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Jeswin Joseph</span>
    </motion.h1>
    
    <div className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8">
      {displayText}<span className="animate-pulse">|</span>
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
        Hire Me
      </a>
      <a href="#projects" className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
        View Work
      </a>
    </div>
  </div>
</section>
  );
};

export default Hero;