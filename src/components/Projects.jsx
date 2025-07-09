import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import food from "../assets/food.png";
import car from "../assets/car.png";
import chat from "../assets/chat.png";
import bus from "../assets/bus.png";
import youtube from "../assets/youtube.png";
import techista from "../assets/techista.png";
import vaidehiHolidays from "../assets/vaidehi.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include product search, cart functionality, and payment integration.",
    technologies: ["Html", "Bootstrap", "MySql", "Node.js"],
    githubLink: "https://github.com/JESWIN100/redshift_ecomerce",
    // liveLink: "https://yourapp.com",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/c8c8c0211994803.Y3JvcCwzODM1LDMwMDAsMCww.jpg"
  },
  {
    id: 2,
    title: "Food Delivery Website",
    description: "An intuitive food ordering platform featuring real-time order tracking, dynamic menus, and Firebase authentication.",
    technologies: ["React", "Node.js", "Material UI","Mongo DB", "Tailwind CSS"],
    githubLink: "https://github.com/JESWIN100/cravehut-frontent",
    liveLink: "https://cravehut.vercel.app/",
    image: food // Make sure 'food' is imported or defined
  },
  {
    id: 3,
    title: "Car Rental Website",
    description: "A modern car rental service with vehicle listings, booking functionality, and location-based search using maps.",
    technologies: ["React", "Node.js", "Material UI","Mongo DB", "Tailwind CSS"],
    githubLink: "https://github.com/JESWIN100/car_rental_frontent",
    liveLink: "https://car-rental-app-frontent-jeswins-projects-f40474fd.vercel.app/",
    image: car
  },
  {
    id: 4,
    title: "Chat App",
    description: "A real-time chat application with socket-based messaging, online/offline indicators, and chat room support.",
    technologies: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    githubLink: "https://github.com/JESWIN100/chatapp_client",
    liveLink: "https://www.quikchat.shop/",
    image: chat
  },
  {
    id: 5,
    title: "Bus Ticket Booking Website",
    description: "A booking system allowing users to search for buses, select seats, and make reservations with live updates.",
    technologies: ["React", "Node.js", "Material UI","Mongo DB", "Tailwind CSS"],
    githubLink: "https://github.com/JESWIN100/bus_booking_frontent",
    liveLink: "https://bookme-git-main-jeswins-projects-f40474fd.vercel.app/",
    image: bus
  },
  {
    id: 6,
    title: "Custom YouTube Website",
    description: "A YouTube clone with clean UI, distraction-free experience, and curated educational content using YouTube API.",
    technologies: ["React", "YouTube API", "Tailwind CSS"],
    githubLink: "https://github.com/JESWIN100/youtube",
    liveLink: "https://youtube-six-ochre.vercel.app/",
    image: youtube
  },
   {
  id: 7,
  title: "Website for Techista",
  description: "A modern and responsive website developed for Techista, a startup company. Built with React and Tailwind CSS to deliver a clean user experience and fast performance. Designed to showcase the brand, services, and mission effectively.",
  technologies: ["React", "Node.js", "Material UI","Mongo DB", "Tailwind CSS ",],
  githubLink: "#",
  liveLink: "https://www.techistasolutions.in/",
  image: techista
},
{
  id: 8,
  title: "Website for Vaidehi Holidays",
  description: "A visually appealing and user-friendly website created for Vaidehi Holidays, a travel and tourism company. Designed to highlight tour packages, destinations, and booking features with a clean interface and responsive layout.",
  technologies: ["React", "Node.js", "Material UI","Mongo DB", "Tailwind CSS ","React Router","Razorpay"],
  githubLink: "#", // Replace if different
  liveLink: "https://vaidehiholidays.in/", // Replace if different
  image: vaidehiHolidays // Replace with your imported image
}


];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef();

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
      Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 text-sm">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub Repository`}
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Live Demo`}
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5 text-gray-500 dark:text-gray-300" />
              </button>

              <div className="p-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex-1"
                  >
                    <FaGithub className="flex-shrink-0" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1"
                  >
                    <FaExternalLinkAlt className="flex-shrink-0" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;