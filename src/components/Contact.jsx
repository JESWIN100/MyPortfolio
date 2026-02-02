
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import resume from "../assets/jeswin_resume.pdf";
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
    <section id='contact' className="pb-10">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          {/* Left Side: Social Links */}
         <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                Let's <span className="text-blue-600">Connect</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
                Have a project in mind or just want to chat about tech? Feel free to reach out. I'm always open to new opportunities!
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaGithub />, label: "GitHub", href: "https://github.com/JESWIN100" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/jeswinjoseph-/" },
                { icon: <MdEmail />, label: "Email", href: "mailto:jeswinjoseph893@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm"
                >
                  <span className="text-blue-600">{link.icon}</span>
                  <span className="text-sm font-medium dark:text-slate-200">{link.label}</span>
                </a>
              ))}
              
              <a 
                href={resume} 
                download 
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              >
                <FaFileDownload /> <span className="text-sm font-medium">Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <h3 className="text-2xl font-bold mb-8 dark:text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
                  {...register("name", { required: "Name is required" })} 
                />
                {errors.name && <p className="text-red-500 text-xs pl-2">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} 
                />
                {errors.email && <p className="text-red-500 text-xs pl-2">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <textarea
                  rows="4"
                  placeholder="How can I help you?"
                  className={`w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white`}
                  {...register("message", { required: "Message cannot be empty" })} 
                />
                {errors.message && <p className="text-red-500 text-xs pl-2">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 disabled:bg-slate-400 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
