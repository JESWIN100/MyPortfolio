import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-4/5"
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I’m <strong>Jeswin Joseph</strong>, a passionate Web Developer with experience in building dynamic and
            user-friendly web applications. I specialize in <strong>React</strong>, <strong>Node.js</strong>, and modern
            web technologies, with a focus on creating seamless digital experiences. I also have a keen interest in
            Backend Development. Let’s build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
