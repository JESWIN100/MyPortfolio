import React from 'react';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { PiMonitorDuotone } from 'react-icons/pi';

const Experience = () => {
  return (
      <div className="border-l border-gray-300 dark:border-gray-600 py-16 px-4 md:px-10 text-white font-sans">
          <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
    
          <div className="relative max-w-5xl mx-auto border-l-2 border-purple-500 pl-10">
            {/* Icon circle on timeline */}
            <div className="absolute left-[-12px] top-2 w-6 h-6 rounded-full bg-[#0e1320] border-2 border-purple-500 flex items-center justify-center text-purple-400">
            <FaLaptopCode size={14} />
            </div>
    
            {/* Card Content */}
            <div className="border border-purple-500 rounded-md p-6 bg-[#131c31] shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Kerala Digital Park</h3>
              <span className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">2025 (Feb-Mar)</span>
            </div>
            <h4 className="text-purple-400 mb-2">Freelance Web Developer</h4>
            <p className="text-gray-300">
              Successfully developed and deployed two dynamic and responsive websites tailored to client requirements, focusing on performance, accessibility, and modern UI/UX design.
            </p>
          </div>
          </div>
        </div>
  );
};

export default Experience;
