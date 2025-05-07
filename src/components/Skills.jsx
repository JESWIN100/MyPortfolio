import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaJava, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb, SiMysql, SiPhp, SiArduino, SiPostman } from 'react-icons/si';
import { IoLogoFigma } from "react-icons/io5";
const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
   
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL', icon: <SiMysql /> },
     { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Github', icon: <FaGithub /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Figma', icon:<IoLogoFigma />}
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all
                         border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.span
                  whileHover={{ rotate: 360 }}
                  className="text-4xl text-blue-600 dark:text-blue-400 transition-colors
                             group-hover:text-blue-700 dark:group-hover:text-blue-300"
                >
                  {skill.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-blue-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;