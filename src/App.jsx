// App.js
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Hero from './components/Hero';
import EducationCard from './components/EducationCard';
import Experience from './components/Experience';
import { Toaster } from 'sonner';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <Hero />
        <main className="container mx-auto px-4 py-8">
          <About />
          <Skills />
          <EducationCard />
          <Experience/>
          <Projects />
          <Contact />
        </main>
        {/* <Footer /> */}
      </div>
      <Toaster/>
    </div>
   
  );
}

export default App;