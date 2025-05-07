import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { PiMonitorDuotone } from 'react-icons/pi'; // for course icons

const EducationCard = () => {
  return (
    <div className="border-l border-gray-300 dark:border-gray-600 py-16 px-4 md:px-10 text-white font-sans">
      <h2 className="text-4xl font-bold text-center mb-10">Education</h2>

      <div className="relative max-w-5xl mx-auto border-l-2 border-purple-500 pl-10">
        {/* Icon circle on timeline */}
        <div className="absolute left-[-12px] top-2 w-6 h-6 rounded-full bg-[#0e1320] border-2 border-purple-500 flex items-center justify-center text-purple-400">
          <FaGraduationCap size={14} />
        </div>

        {/* Card Content */}
        <div className="border border-purple-500 rounded-md p-6 bg-[#131c31] shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">JDT Islam College of Arts and Science, Kozhikode</h3>
            <span className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">2025 - Present</span>
          </div>
          <h4 className="text-purple-400 mb-2">Bachelor of Tourism and Travel Management (BTTM)</h4>
          <p className="text-gray-300 mb-4">
            A comprehensive undergraduate program focused on the tourism industry, including hospitality, travel operations, cultural tourism, and tourism marketing.
          </p>

          <div>
            <h5 className="font-semibold mb-2 text-white">Key Courses</h5>
            <ul className="space-y-1 text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <PiMonitorDuotone /> Tourism Management
              </li>
              <li className="flex items-center gap-2">
                <PiMonitorDuotone /> Hospitality Operations
              </li>
              <li className="flex items-center gap-2">
                <PiMonitorDuotone /> Cultural Heritage and Tourism
              </li>
              <li className="flex items-center gap-2">
                <PiMonitorDuotone /> Travel Agency and Tour Operations
              </li>
              <li className="flex items-center gap-2">
                <PiMonitorDuotone /> Tourism Marketing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
