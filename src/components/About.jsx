import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-800 dark:text-white"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-3/4 lg:w-2/3 bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
              <span className="block mb-4">
                Hi, I’m <strong className="text-blue-600 dark:text-blue-400 font-semibold">Jeswin Joseph</strong>, 
                a passionate Full Stack Developer based in Kerala.
              </span>
              
              I specialize in crafting dynamic, scalable, and user-friendly web and mobile applications. 
              My expertise lies in the <strong className="text-slate-900 dark:text-white">MERN stack</strong>, 
              leveraging <strong className="text-slate-900 dark:text-white">React.js, Next.js, and React Native</strong> to build 
              seamless cross-platform experiences.
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
               {/* Quick Highlights */}
               <div className="flex flex-col">
                  <span className="text-blue-600 font-bold text-2xl">1+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Years Experience</span>
               </div>
               <div className="w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
               <div className="flex flex-col">
                  <span className="text-blue-600 font-bold text-2xl">10+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Projects Built</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;