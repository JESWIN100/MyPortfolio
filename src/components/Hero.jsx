import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import profile from "../assets/jj.jpg"
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "Backend Specialist",
    "Mern Stack Developer",
    "Creative Coder"
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
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-20">
      <div className="container mx-auto text-center">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=" flex items-center justify-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img 
              src={profile} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jeswin Joseph.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300 h-14 md:h-16 flex items-center justify-center">
            <span className="border-r-2 border-gray-400 dark:border-gray-500 pr-2">
              {displayText}
            </span>
          </h2>
             <div className="flex justify-center items-center flex-wrap gap-4 mt-7 ">
                      <a 
                        href="#contact" 
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Contact Me
                      </a>
                      <a 
                        href="#projects" 
                       
                        className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                      >
                        View Projects
                      </a>
                    </div>
        </motion.div>

        {/* Rest of your hero section remains the same */}
        {/* ... */}
      </div>
    </section>
  );
};

export default Hero;