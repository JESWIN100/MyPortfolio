
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import reume from "../assets/jeswin joseph.pdf";
import { useForm } from "react-hook-form"
import axios from "axios";
import { useState } from 'react';
import { toast } from 'sonner';
const Contact = () => {


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
const [alert,setAlert]=useState()
const [loading, setLoading] = useState(false);

const onSubmit = async (data) => {
  setLoading(true); // Start loading
  setAlert(null);   // Clear previous alerts
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/create`, data);
    console.log(response);
    if (response.data.status === true) {
      // setAlert(response.data.message);
      toast.success(response.data.message)
      reset()
    }
  } catch (error) {
    console.log(error);
    setAlert("Something went wrong. Please try again.");
  } finally {
    setLoading(false); // Stop loading
  }
};

  



  return (
    <section id='contact'>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          {/* Left Side: Social Links */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded" />

            <div className="flex flex-wrap gap-4">
              {/* GitHub Button */}
              <a 
                href="https://github.com/JESWIN100" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-[#1E1F29] rounded-full hover:bg-[#2A2B38] transition"
              >
                <FaGithub /> GitHub
              </a>

              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/jeswinjoseph-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-[#1E1F29] rounded-full hover:bg-[#2A2B38] transition"
              >
                <FaLinkedin /> LinkedIn
              </a>

              {/* Email Button */}
              <a 
                href="mailto:jeswinjoseph893@gmail.com" 
                className="flex items-center gap-2 px-5 py-2 bg-[#1E1F29] rounded-full hover:bg-[#2A2B38] transition"
              >
                <MdEmail /> Email
              </a>

              {/* Download CV Button */}
              <a 
                href={reume} 
                download 
                className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <FaFileDownload /> Download CV
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#1A1B25] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
           
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("name")} 
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("email")} 
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("message")} 
              />
              <button
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded text-white font-semibold transition ${
    loading
      ? 'bg-gray-600 cursor-not-allowed'
      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90'
  }`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

{alert && (
  <div className="w-full p-4 text-sm text-green-100 bg-green-700 rounded-lg">
    {alert}
  </div>
)}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
